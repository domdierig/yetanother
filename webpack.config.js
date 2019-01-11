const path = require("path");

module.exports = {
    entry: {
        ya: "./src/ya.js",
        yaGlobal: "./src/yaGlobal.js",
        index: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, "build")
    },
    watch: true,
    watchOptions: {
        ignored: /nodeModules/
    },
    mode: "development"
}