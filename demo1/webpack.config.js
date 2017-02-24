let path = require('path');

module.exports = {
	entry:path.resolve(__dirname,'./app/app.js'),
	output:{
		path:path.resolve(__dirname,'./build'),
		filename:'js/build.js'
	},
	module:{
		loaders:[
			{
				test:/\.js?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			}
		]
	}

}