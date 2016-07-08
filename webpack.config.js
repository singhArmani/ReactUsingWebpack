

var config = {
    devtool:'inline-source-map',
    entry: ['./client/client.js'],
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders:[{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude:/node_modules/
        }]
    }

};

module.exports = config;