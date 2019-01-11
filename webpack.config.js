const path = require("path");

module.exports = {
    entry: {
        ya: "./src/ya.js"
    },
    output: {
        path: path.resolve(__dirname, "build")
    },
    watch: true,
    watchOptions: {
        ignored: /nodeModules/
    },
    mode: "development",
	module: {
		rules: [
			{
				test: /\.m?js$/,
      			exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				} 
			}
		]
	}
}