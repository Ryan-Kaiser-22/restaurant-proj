const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. Sets the environment to development for faster builds and better debugging
  mode: 'development',
  
  // 2. The "starting point" of your application
  entry: './src/index.js',

  // 3. Where the final bundle goes
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the /dist folder before each build
  },

  // 4. Development Server settings (live-reloading)
  devServer: {
    static: './dist',
    hot: true,     // Enables Hot Module Replacement
    open: true,    // Opens browser automatically
    port: 3000,
  },

  module: {
    rules: [
      // Handle CSS files (style-loader injects into DOM, css-loader reads the file)
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Handle Images (PNG, SVG, JPG, etc.) using built-in Asset Modules
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Handle Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // 5. Plugins to extend Webpack functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', 
      filename: 'index.html',
  }),
  ],
}   