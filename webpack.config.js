var path = require('path');

module.exports = {
  entry: {
    app: "./app/assets/js/app.js",
    vendor: "./app/assets/js/vendor.js"

  },

module: {
               loaders: [{
                   test: /.jsx?$/,
                   loader: 'babel-loader',
                   exclude: /node_modules/,
                   query: {
                       presets: ['env']
                   }
               }]
           },
           output: {
             path: path.resolve(__dirname, "./app/assets/scripts/"),
             filename: "[name].js"
         }
}
