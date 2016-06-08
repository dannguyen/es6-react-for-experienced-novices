
# Upgrading node and npm



https://docs.npmjs.com/getting-started/installing-node

~~~sh
brew upgrade node
npm install npm -g
~~~


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


# Adding to the scripts in Packages JSON



## Errors to fix


        bundle.js:17046 Uncaught Invariant Violation: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX. This DOM node was rendered by `App`




## Errors left unfixed


Attempted immediate load of page:

        $ npm start

        Dans-iMac:es6-react-exnovices dmac$ events.js:160
              throw er; // Unhandled 'error' event
              ^

        Error: listen EADDRINUSE 127.0.0.1:8080
            at Object.exports._errnoException (util.js:1007:11)
            at exports._exceptionWithHostPort (util.js:1030:20)
            at Server._listen2 (net.js:1253:14)
            at listen (net.js:1289:10)
            at net.js:1399:9
            at GetAddrInfoReqWrap.asyncCallback [as callback] (dns.js:65:16)
            at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:84:10)



Running built version on a remote server or something that is _not_ 127.0.0.1:


      Failed to load resource: net::ERR_CONNECTION_REFUSED
      bundle.js:29374 [WDS] Disconnected!sock.onclose @ bundle.js:29374
      bundle.js:32849 GET http://127.0.0.1:8080/sockjs-node/info?t=1465363999061 net::ERR_CONNECTION_REFUSEDAbstractXHRObject._start @ bundle.js:32849(anonymous function) @ bundle.js:32738
      bundle.js:29374 [WDS] Disconnected!sock.onclose @ bundle.js:29374EventTarget.dispatchEvent @ bundle.js:32273(anonymous function) @ bundle.js:35455
      bundle.js:32849 GET http://127.0.0.1:8080/sockjs-node/info?t=1465364001080 net::ERR_CONNECTION_REFUSEDAbstractXHRObject._start @ bundle.js:32849(anonymous function) @ bundle.js:32738
      bundle.js:29374 [WDS] Disconnected!sock.onclose @ bundle.js:29374EventTarget.dispatchEvent @ bundle.js:32273(anonymous function) @ bundle.js:35455
      bundle.js:32849 GET http://127.0.0.1:8080/sockjs-node/info?t=1465364003103 net::ERR_CONNECTION_REFUSEDAbstractXHRObject._start @ bundle.js:32849(anonymous function) @ bundle.js:32738
      bundle.js:29374 [WDS] Disconnected!sock.onclose @ bundle.js:29374EventTarget.dispatchEvent @ bundle.js:32273(anonymous function) @ bundle.js:35455
      bundle.js:32849 GET http://127.0.0.1:8080/sockjs-node/info?t=1465364005122 net::ERR_CONNECTION_REFUSEDAbstractXHRObject._start @ bundle.js:32849(anonymous function) @ bundle.js:32738
      bundle.js:29374 [WDS] Disconnected!


## Build process


~~~
> es6-react-for-experienced-novices@1.0.0 build /Users/dmac/Dropbox/projes/es6-react-exnovices
> npm run clean & npm run copy & webpack --progress --colors


> es6-react-for-experienced-novices@1.0.0 clean /Users/dmac/Dropbox/projes/es6-react-exnovices
> rm -r build/


> es6-react-for-experienced-novices@1.0.0 copy /Users/dmac/Dropbox/projes/es6-react-exnovices
> copyfiles -f ./src/index.html ./build

Version: webpack 1.13.1
Time: 2347ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.21 MB       0  [emitted]  main
   [0] multi main 52 bytes {0} [built]
    + 615 hidden modules
~~~
