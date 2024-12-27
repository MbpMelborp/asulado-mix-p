// npx mix watch
let mix = require("laravel-mix");
const { rimraf, rimrafSync, native, nativeSync } = require("rimraf");

const cdn = '"https://asulado-cdn-mbp.s3.amazonaws.com/assets';
const cdn_final = '"{!$Label.CdnAsulado}/assets'; //'"https://d2d3tju83rs4vu.cloudfront.net/assets';
const cdn_qa = '"https://dw2fbj22ajabu.cloudfront.net/assets';
const config_html = {
  partialRoot: "./src/partials",
  layoutRoot: "./src/layouts",
  minify: false,
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

    .postCss("src/css/app.css", "dist/assets/css/")
    .postCss("src/css/portal.css", "dist/assets/css/")
    .postCss("src/css/forms.css", "dist/assets/css/")
    // .postCss("src/css/banner.css", "dist/assets/css/")
    .postCss(
      "node_modules/@glidejs/glide/dist/css/glide.core.min.css",
      "dist/assets/css/"
    )

    .html({
      htmlRoot: "./src/pages/**/*.html",
      output: "dist",
      ...config_html,
    });

  mix.options({
    postCss: [
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),
    ],
  });

  if (mix.inProduction())
    mix
      .then(async () => {
        rimraf("final/assets");
      })

      .copyDirectory("dist", "final")
      .replaceInFile({
        files: ["final/*.html", "final/**/*.html"],
        from: /\"\/assets/g,
        to: cdn_final,
      })
      .replaceInFile({
        files: ["final/*.html", "final/**/*.html"],
        from: /\(\/assets/g,
        to: cdn_final,
      })
      .replaceInFile({
        files: ["final/*.html", "final/**/*.html"],
        from: /class=\"debug-screens\"/g,
        to: "",
      })
      .then(async () => {
        rimraf("final/assets");
      });
} catch (error) {
  console.error(error);
}
