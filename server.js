'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
// todo fix later
const defaultSettings = {port: 8080};

const open = require('open');
const port_number = 8080;
let target_entry = 'http://localhost:' + defaultSettings.port + '/';
config.entry.unshift("webpack-dev-server/client?" + target_entry);


new WebpackDevServer(webpack(config), {contentBase: 'src', hot: true, stats: { colors: true }, publicPath: '/assets/'})
.listen(defaultSettings.port , 'localhost' , (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + defaultSettings.port );
  console.log('Opening your system browser...');
  open(target_entry);
});
