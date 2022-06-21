import {babel} from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import postCssImport from "postcss-import";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const outputFolder = "public";
const open = process.env.START_BROWSER === "true";
const watching = process.env.ROLLUP_WATCH === "true";
const environment = (watching && "development") || "production";

export default {
  input: "src/index.js",
  output: {
    file: `${outputFolder}/app.js`,
    format: "iife",
    sourcemap: true
  },
  plugins: [
    babel({ 
      babelHelpers: "bundled"
    }),
    resolve({ browser:true }),
    commonjs({
        include: "node_modules/**"
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(environment),
      preventAssignment: true,
    }),
    babel({ babelHelpers:"bundled"}),
    postcss({
          plugins: [postCssImport]
        })
  ].concat(
      watching ? [
        serve({contentBase: outputFolder, 
                port: 10001 ,
                verbose: true, 
                open,}),
        livereload()
      ]:[]
  )
};
