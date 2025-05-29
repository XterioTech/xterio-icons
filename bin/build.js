/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require("path");
const fs = require("fs");
const format = require("prettier-eslint");
const processSvg = require("./processSvg");
const { parseName } = require("./utils");
const defaultStyle = process.env.npm_package_config_style || "stroke";
const { getAttrs, getElementCode } = require("./template");
const icons = require("../src/data.json");

const rootDir = path.join(__dirname, "..");

// where icons code in
const srcDir = path.join(rootDir, "src");
const iconsDir = path.join(rootDir, "src/icons");

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
    fs.mkdirSync(iconsDir);
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  `;

  fs.writeFileSync(path.join(rootDir, "src", "icons.js"), "", "utf-8");
  fs.writeFileSync(
    path.join(rootDir, "src", "icons.d.ts"),
    initialTypeDefinitions,
    "utf-8"
  );
};

// generate attributes code
const attrsToString = (attrs, style) => {
  //   console.log("style: ", style);
  return Object.keys(attrs)
    .map((key) => {
      // should distinguish fill or stroke
      if (key === "width" || key === "height" || key === style) {
        return key + "={" + attrs[key] + "}";
      }
      if (key === "otherProps") {
        return "{...otherProps}";
      }
      return key + '="' + attrs[key] + '"';
    })
    .join(" ");
};

// generate icon code separately
const generateIconCode = async ({ name, width, height }) => {
  const { type, componentName: ComponentName, style } = parseName(
    name,
    defaultStyle
  );
  //   console.log(name, ComponentName);
  const location = path.join(rootDir, "src/svg", `${name}.svg`);
  const destination = path.join(rootDir, "src/icons", `${ComponentName}.js`);
  const code = fs.readFileSync(location);
  const { svgCode, originFill } = await processSvg(code, type);
  const element = await getElementCode(
    ComponentName,
    attrsToString(getAttrs(style), style),
    svgCode,
    width,
    height,
    originFill
  );
 try {
    const component = format({
        text: element,
        eslintConfig: {
          extends: "airbnb",
        },
        prettierOptions: {
          bracketSpacing: true,
          singleQuote: true,
          parser: "flow",
        },
      });
    
      fs.writeFileSync(destination, component, "utf-8");
    
 } catch (error) {
    console.log(type)
 }
  //   console.log("Successfully built", ComponentName);
  return { ComponentName, name };
};

// append export code to icons.js
const appendToIconsIndex = ({ ComponentName, name }) => {
  const exportString = `export { default as ${ComponentName} } from './icons/${ComponentName}';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, "src", "icons.js"),
    exportString,
    "utf-8"
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, "src", "icons.d.ts"),
    exportTypeString,
    "utf-8"
  );
};

generateIconsIndex();

let ComponentNameToWidth = {};


Object.keys(icons)
  .map((key) => icons[key])
  .forEach(({ name, width, height }) => {
    if(name.startsWith('icon') || name.startsWith('colorful_icon')) {
      generateIconCode({ name, width, height }).then(
      ({ ComponentName, name }) => {
        appendToIconsIndex({ ComponentName, name });
        ComponentNameToWidth[ComponentName] = width;
        fs.writeFileSync(
          path.join(rootDir, "src", "config.js"),
          `export const ComponentNameToWidth = ${JSON.stringify(
            ComponentNameToWidth
          )}`,
          "utf-8"
        );
      }
    );
    }
    
  });
