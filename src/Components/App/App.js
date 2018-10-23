import React, { Component } from 'react';

import {
  BrowserRouter, Switch, Route, 
} from 'react-router-dom';

import './App.css';

import Home from '../Home/Home.js';
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
}

export default App;
