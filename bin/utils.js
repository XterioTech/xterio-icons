const upperCamelCase = require("uppercamelcase");

const parseName = (name, defaultStyle) => {
  const nameSlices = name ? name.replaceAll("-", "_").split("_") : '';
  const type = nameSlices[0] === "colorful" ? nameSlices.shift() : "normal";
  const size = nameSlices[nameSlices.length - 1];
  return {
    type,
    size,
    name,
    componentName: upperCamelCase(nameSlices.join("_")),
    style: defaultStyle,
  };
};

module.exports = {
  parseName,
};
