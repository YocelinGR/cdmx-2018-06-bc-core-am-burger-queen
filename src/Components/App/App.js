import React from 'react';
import { BrowserRouter as Router,
  Route, } from 'react-router-dom';

import './App.css';

import Navigation from '../Navigation/Navigation';
import Signin from '../signin/signin';
import Signup from '../signup/signup';
import Home from '../Home/Home';
import PswPassword from '../psw-forget/psw-forget';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import ChefView from '../ChefView/ChefView';
import AdminView from '../AdminView/AdminView';

import * as routes from '../../constants/routes';


/*import Home from '../Home/Home.js';
import WaitressView from '../WaitressView/WaitressView.js';
import ChefView from '../ChefView/ChefView.js';
import Breakfast from '../Breakfast/Breakfast.js';
import Lunch from '../Lunch/Lunch.js';
import AdminView from '../AdminView/AdminView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/WaitressView" exact component={WaitressView}/>
          <Route path="/WaitressView/Breakfast" exact component={Breakfast}/>
          <Route path="/WaitressView/Lunch" exact component={Lunch}/>
          <Route path="/ChefView" exact component={ChefView}/>
          <Route path="/AdminView" exact component={AdminView}/>
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}*/ 

const App = () => 
  <Router>
    <Navigation />
  </Router>


export default App;
