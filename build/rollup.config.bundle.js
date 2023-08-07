import babel from "@rollup/plugin-babel";
import path from "path";
import copy from "rollup-plugin-copy";
import pkg from "../package.json";

const resolveFile = function(filePath) {
  return path.join(__dirname, "..", filePath);
};

export default [
  {
    input: "src/rn-icons.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    external: ["react", "prop-types", "react-native-svg"],
    plugins: [
      copy({
        targets: [
          { src: resolveFile("src/icons.d.ts"), dest: resolveFile("dist/") },
        ],
      }),
      babel({
        exclude: "node_modules/**",
      }),
    ],
  },
  {
    input: "src/rn-icons.js",
    output: [
        { file: "dist/xterio-icons-rn.cjs.js", format: "cjs" },
        { file: "dist/xterio-icons-rn.esm.js", format: "es" },
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
