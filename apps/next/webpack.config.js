const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust based on your structure
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
        alias: {
            'react-native$': 'react-native-web',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
};
