// npx mix watch
let mix = require("laravel-mix");

// const tailwindcss = require("tailwindcss");

const config_html = {
  partialRoot: "./src/partials", // default partial path
  layoutRoot: "./src/layouts", // default partial path
  minify: {
    removeComments: false,
  },
};

require("mix-html-builder");
require("laravel-mix-string-replace");

// mix.js('src/js/app.js', 'assets')
//    .sass('src/scss/app.scss', 'assets')
//     .options({
//       processCssUrls: false,
//       postCss: [ tailwindcss('tailwind.config.js') ],
//   });

// .options({,kom,
//   processCssUrls: false,
//   "tailwindcss/nesting": {},
//   postCss: [tailwindcss("tailwind.config.js")],
// });

mix
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
  .stringReplace({
    test: /dist\.html$/,
    loader: "string-replace-loader",
    options: {
      search: "/assets/",
      replace: "http://cdnas.melborp.com/assets/",
    },
  });
