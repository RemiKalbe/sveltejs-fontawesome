import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [{
    input: pkg.svelte,
    output: {
      file: "build/output.js",
      format: "iife",
      name: "Fa"
    },
    plugins: [
      resolve(),
      commonjs(),
      svelte(),
      babel({
        exclude: "node_modules/**",
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 0.25%, not dead"
            }
          ]
        ]
      })
    ]
  }]