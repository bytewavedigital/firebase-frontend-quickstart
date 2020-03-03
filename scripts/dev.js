const Bundler = require("parcel-bundler");
const Path = require("path");
const options = require("./options");

const entryFiles = Path.join(__dirname, "../index.html");
const devOptions = {
  logLevel: 3,
  watch: true
};

(async function() {
  const bundler = new Bundler(entryFiles, { ...options, ...devOptions });
  const bundle = await bundler.serve();
})();
