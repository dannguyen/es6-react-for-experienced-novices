

## Initialize npm project

~~~sh
# initialized
npm init

# save react
npm install --save react react-dom jquery
~~~


# Set up babel

~~~sh
npm install --save-dev babel-core babel-runtime babel-loader
npm install --save-dev babel-preset-react babel-preset-es2015 babel-polyfill

touch .babelrc
~~~

Paste in:

~~~json
{
    "plugins": ['transform-runtime'],
    "presets": ["es2015", "react"]
}
~~~



# Set up webpack

~~~sh
# install webpack
npm install --save-dev webpack webpack-dev-server

touch webpack.config.js
~~~

Paste in:
https://webpack.github.io/docs/tutorials/getting-started/#config-file

~~~js
var config = {
  entry: [
    "babel-polyfill",
    path.resolve(__dirname, "index.js"),
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  }, //...
  // Part 2 goes here
};
module.exports = config;
~~~

Add the loaders (part 2):

~~~js
  //...
  module: {
    loaders: [
      {
        include: [
          path.resolve(__dirname, "app"),
        ],
        // A regexp to test the require path. accepts either js or jsx
        test: /\.jsx?$/,
        // The module to load. "babel" is short for "babel-loader"
        loader: 'babel-loader',
     },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
~~~


## Add start scripts to package.json


~~~json
"scripts": {
  "start": "webpack-dev-server --hot --inline",
  "build": "webpack --progress --colors"
},
~~~



## Let's build


~~~sh
mkdir app
touch index.js app/app.jsx
~~~

# Write the application code


## app/app.jsx


~~~js
import React from 'react';

export class App extends React.Component{
  render(){
    return(<div className="app" />)
  }
};
~~~


## app/index.js


~~~js
'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';


render((<App />), document.getElementById('app'));
~~~



# index.html

Boilerplate

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>This is my fun app</title>
    <meta charset="UTF-8"/>
  </head>
  <body>
    <h1>My fun search app!</h1>

    <div id="app"></div>

    <script src="bundle.js"></script>
  </body>
</html>
~~~
