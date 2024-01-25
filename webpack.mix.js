// npx mix watch
let mix = require("laravel-mix");
const { rimraf, rimrafSync, native, nativeSync } = require("rimraf");

// const tailwindcss = require("tailwindcss");

const cdn = '"https://asulado-cdn-mbp.s3.amazonaws.com/assets';
const cdn_final = '"https://d2d3tju83rs4vu.cloudfront.net/assets'; //'"https://d2d3tju83rs4vu.cloudfront.net/assets';
const cdn_qa = '"https://dw2fbj22ajabu.cloudfront.net/assets';

const config_html = {
  partialRoot: "./src/partials", // default partial path
  layoutRoot: "./src/layouts", // default partial path
  minify: false,
  // minify: {
  //   removeComments: false,
  // },
};

require("mix-html-builder");
require("laravel-mix-replace-in-file");

try {
  mix
    .before(async () => {
      rimraf("prod/*");
    })
    .js("src/js/app.js", "dist/assets/js/app.js")
    .js("src/js/portal.js", "dist/assets/js/portal.js")
    //   .minify("dist/assets/js/app.js")
    .postCss("src/css/app.css", "dist/assets/css/app.css", [
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
    ])
    .postCss("src/css/portal.css", "dist/assets/css/portal.css", [
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
    ])
    //   .minify("dist/assets/css/app.css")
    .html({
      htmlRoot: "./src/pages/**/*.html", // Your html root file(s)
      output: "dist", // The html output folder
      ...config_html,
    });

  if (mix.inProduction())
    mix
      .then(async () => {
        rimraf("prod/assets");
        rimraf("final/assets");
        rimraf("qa/assets");
      })
      .copyDirectory("dist", "prod")
      .copyDirectory("dist", "final")
      .copyDirectory("dist", "qa")
      .replaceInFile({
        files: ["prod/*.html", "prod/**/*.html"],
        from: /\"\/assets/g,
        to: cdn,
      })
      .replaceInFile({
        files: ["final/*.html", "final/**/*.html"],
        from: /\"\/assets/g,
        to: cdn_final,
      })
      .replaceInFile({
        files: ["qa/*.html", "qa/**/*.html"],
        from: /\"\/assets/g,
        to: cdn_qa,
      })
      // .replaceInFile({
      //   files: ["prod/*.html", "prod/**/*.html"],
      //   from: /\"\/documentos/g,
      //   to: docs,
      // })
      // .replaceInFile({
      //   files: ["final/*.html", "final/**/*.html"],
      //   from: /\"\/documentos/g,
      //   to: docs,
      // })
      .replaceInFile({
        files: [
          "prod/*.html",
          "prod/**/*.html",
          "final/*.html",
          "final/**/*.html",
          "qa/*.html",
          "qa/**/*.html",
        ],
        from: /class=\"debug-screens\"/g,
        to: "",
      })
      .then(async () => {
        rimraf("prod/assets");
        rimraf("final/assets");
        rimraf("qa/assets");
      });
  // .browserSync("http://localhost:8000");
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
