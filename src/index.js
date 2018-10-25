import React from 'react';
import ReactDOM from 'react-dom';


import App from './Components/App/App';
import Signin from './Components/signin/signin';
import Signup from './Components/signup/signup';
import PswPassword from './Components/psw-forget/psw-forget';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();