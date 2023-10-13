// npx mix watch
let mix = require("laravel-mix");
const { rimraf, rimrafSync, native, nativeSync } = require("rimraf");

// const tailwindcss = require("tailwindcss");

const cdn = '"https://asulado-cdn-mbp.s3.amazonaws.com/assets';

const config_html = {
  partialRoot: "./src/partials", // default partial path
  layoutRoot: "./src/layouts", // default partial path
  minify: {
    removeComments: false,
  },
};

require("mix-html-builder");
require("laravel-mix-replace-in-file");

mix
  .before(async () => {
    rimraf("prod/*");
  })
  .js("src/js/app.js", "dist/assets/js/app.js")
  .postCss("src/css/app.css", "dist/assets/css/app.css", [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ])
  .html({
    htmlRoot: "./src/pages/**/*.html", // Your html root file(s)
    output: "dist", // The html output folder
    ...config_html,
  })
  .then(async () => {
    rimraf("prod/assets");
  })
  .copyDirectory("dist", "prod")
  .replaceInFile({
    files: ["prod/*.html", "prod/**/*.html"],
    from: /\"\/assets/g,
    to: cdn,
  })
  .then(async () => {
    rimraf("prod/assets");
  });
