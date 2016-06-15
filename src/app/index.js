'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';

require("../static/favicon.ico");
require("../stylesheets/styles.scss");

const DEFAULT_DATA_SOURCE = require("../static/testdata.json");

const ReactFilterTable = (el_id, dataUrl=DEFAULT_DATA_SOURCE) =>{
  render((<App dataUrl={dataUrl} />), document.getElementById(el_id));
}

module.exports = ReactFilterTable;
