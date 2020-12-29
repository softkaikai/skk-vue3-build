const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default



module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'skk',
        libraryTarget: 'umd',
        filename: 'skk.js',
        auxiliaryComment: 'Test Comment'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
