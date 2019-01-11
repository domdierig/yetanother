const path = require("path");

module.exports = {
    entry: {
        index: "./index.js"
    },
    output: {
        path: path.resolve(__dirname),
		filename: "index.bundle.js"
    },
    watch: true,
    watchOptions: {
        ignored: /nodeModules/
    },
    mode: "development",
    devtool: "source-map"
}