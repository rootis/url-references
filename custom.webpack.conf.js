const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                COLLECTION_PATH: JSON.stringify(process.env.COLLECTION_PATH),
                FIREBASE_CONFIG: process.env.FIREBASE_CONFIG
            }
        })
    ]
};
