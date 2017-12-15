// export default {
//     entry: './modules/app.js',
//     devtool: 'inline-source-map',
//     output: {
//         path: __dirname + '/build',
//         publicPath: '/build',
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//             query: {
//                 presets: ['es2015']
//             }
//         }]
//     }
// }


module.exports = {
    entry: './modules/app.js',
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
}