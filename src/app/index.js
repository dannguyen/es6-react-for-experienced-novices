'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';

require("../stylesheets/mystyles.css");


const THE_RECORDS = [
  {
      name: 'Brian Kernighanxxx',
      description: "Hello world"
  },
  {
     name: 'Titanic',
     description: "A big boat"
  },
  {
    name: 'Ruby',
    description: 'A language and also a gem'
  }
]


render((<App records={THE_RECORDS}/>), document.getElementById('app'));
