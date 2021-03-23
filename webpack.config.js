var path = require('path');

module.exports = {
    entry: './node_modules/ethers/lib/ethers.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ethers.js',
        library: 'ethers',
        libraryTarget: 'var',
    },
    mode: 'production',
};
