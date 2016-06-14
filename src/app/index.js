'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';



render((<App dataUrl="../static/testdata.json"/>), document.getElementById('app'));
