import path from 'path'
import webpack from 'webpack'

export default {
	devtools: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js')
	],
	output: {
		path: '/',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /(\.js|\.jsx)$/,
				include: path.join(__dirname, 'client'),
				loaders: ['react-hot', 'babel']
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[name]__[local]___[hash:base64:5]'
				}
			}
		]
	},
	resolve: {
		extentions: ['', '.js', 'jsx']
	}
}