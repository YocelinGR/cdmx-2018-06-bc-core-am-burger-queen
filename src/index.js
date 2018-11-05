import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
serviceWorker.unregister();