var path = require('path')

var PATHS = {
    app: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
}

module.exports = {
    entry: [
        path.join(PATHS.app, 'index.tsx'),
        path.join(PATHS.app, 'index.html')
    ],
    output: {
        path: PATHS.dist,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!sass?sourceMap'
            },
            // Just move the html over
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    resolve: {
        root: path.app,
        extensions: ['', '.ts', '.tsx', '.js']
    }
}