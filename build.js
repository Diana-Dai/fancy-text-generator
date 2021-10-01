const pug = require("pug");
const fs = require("fs");
// Compile the source code
const compiledFunction1 = pug.compileFile("home.pug");
const compiledFunction2 = pug.compileFile("patterns.pug");
const compiledFunction3 = pug.compileFile("iosEmojis.pug");
const compiledFunction4 = pug.compileFile("unicode.pug");

// Render a set of data
var pug_html1 = compiledFunction1({
  title: "Fancy Text Generator Title From NodeJS",
});
var pug_html2 = compiledFunction2({
  title: "Fancy Text Generator Title From NodeJS",
});
var pug_html3 = compiledFunction3({
  title: "Fancy Text Generator Title From NodeJS",
});
var pug_html4 = compiledFunction4({
  title: "Fancy Text Generator Title From NodeJS",
});

const { minify } = require("html-minifier-terser");

minify(pug_html1, {
  removeAttributeQuotes: false,
  removeComments: true,
  minifyJS: true,
  minifyCSS: true,
}).then((result) => {
  fs.writeFileSync("release/home.html", result, "utf8");
});

minify(pug_html2, {
  removeAttributeQuotes: false,
  removeComments: true,
  minifyJS: true,
  minifyCSS: true,
}).then((result) => {
  fs.writeFileSync("release/patterns.html", result, "utf8");
});

minify(pug_html3, {
  removeAttributeQuotes: false,
  removeComments: true,
  minifyJS: true,
  minifyCSS: true,
}).then((result) => {
  fs.writeFileSync("release/iosEmojis.html", result, "utf8");
});

minify(pug_html4, {
  removeAttributeQuotes: false,
  removeComments: true,
  minifyJS: true,
  minifyCSS: true,
}).then((result) => {
  fs.writeFileSync("release/unicode.html", result, "utf8");
});
