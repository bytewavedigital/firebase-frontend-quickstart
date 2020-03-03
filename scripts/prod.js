const Bundler = require("parcel-bundler");
const Path = require("path");
const options = require("./options");
const { preBuild, postBuild } = require("../build");

const entryFiles = Path.join(__dirname, "../index.html");
const prodOptions = {
  logLevel: 3,
  watch: false,
  sourceMaps: false,
  publicUrl: "./"
};
(async function() {
  const bundler = new Bundler(entryFiles, { ...options, ...prodOptions });
  preBuild();
  const bundle = await bundler.bundle();
  postBuild();
})();
