import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './Components/Home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();