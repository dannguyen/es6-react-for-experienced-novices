'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';

require("../stylesheets/mystyles.css");


const THE_RECORDS = [
  {
      name: 'Brian Kernighan',
      description: "Hello world"
  },
  {
     name: 'Titanic',
     description: "A big boat"
  },
  {
    name: 'Ruby',
    description: 'A language and also a gem'
  },
  {
    name: 'Ada',
    description: 'Short for "Adelle"'
  }
]


render((<App records={THE_RECORDS}/>), document.getElementById('app'));
