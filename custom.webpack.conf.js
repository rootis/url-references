const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                FIREBASE_CONFIG: JSON.parse(process.env.FIREBASE_CONFIG)
            }
        })
    ]
};
