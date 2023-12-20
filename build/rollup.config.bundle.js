import babel from "@rollup/plugin-babel";
import path from "path";
import copy from "rollup-plugin-copy";
import pkg from "../package.json";
import glob from 'glob';

const resolveFile = function(filePath) {
  return path.join(__dirname, "..", filePath);
};


const inputFiles = glob.sync('src/icons/*.js');



export default [
  {
    input: "src/icons.js",
    output: [
        { file: pkg.main, format: "cjs" },
        { file: pkg.module, format: "es" },
    ],
    external: ["react", "prop-types", "react-native-svg"],
    plugins: [
      copy({
        targets: [
          { src: resolveFile("src/icons.d.ts"), dest: resolveFile("dist/") },
        //   { src: resolveFile("src/icons/types"), rename: 'lib',  dest: resolveFile("dist/") },
        ],
      }),
      babel({
        exclude: "node_modules/**",
      }),
    ],
  },
  {
    input: inputFiles,
    output: [
      { dir: './dist/lib', format: "cjs" },
    //   { dir: './dist/lib', format: "cjs" },
    ],
    external: ["react", "prop-types", "react-native-svg"],
    plugins: [
        // copy({
        //     flatten: true,
        //     targets: [
        //         { src: resolveFile("src/icons.d.ts"), dest: resolveFile("dist/types") },
        //       { src: resolveFile("src/icons/types"), dest: resolveFile("dist/types/lib") },
        //     ],
        //   }),
      babel({
        exclude: "node_modules/**",
      }),
    ],
  },
  {
    input: "src/rn-icons.js",
    output: [
        { file: "dist/xterio-icons-rn.js", format: "es" },
    ],
    external: ["react", "prop-types", "react-native-svg"],
    plugins: [
      copy({
        targets: [
          { src: resolveFile("src/xterio-icons-rn.d.ts"), dest: resolveFile("dist/") },
        ],
      }),
      babel({
        exclude: "node_modules/**",
      }),
    ],
  },
];
