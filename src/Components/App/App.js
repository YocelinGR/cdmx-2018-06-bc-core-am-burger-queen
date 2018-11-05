/*import React from 'react';
import { BrowserRouter as Router,
	Route, } from 'react-router-dom';

import './App.css';

import Navigation from '../Navigation/Navigation';
import SignInPage from '../SignIn/SignIn';
import SignUpPage from '../SignUp/SignUp';
import HomePage from '../Home/Home';
import PasswordForgetPage  from '../PasswordForget/PasswordForget';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import ChefView from '../ChefView/ChefView';
import AdminView from '../AdminView/AdminView';
import AccountPage from '../Account/Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes'; 
const App = () =>
	<Router>
		<div className="app">
			<Navigation />

			<hr/>

			<Route exact path={routes.BREAKFAST} component={() => <Breakfast />} />
      <Route exact path={routes.LUNCH} component={() => <Lunch />} />
      <Route exact path={routes.CHEF} component={() => <ChefView />} />
      <Route exact path={routes.ADMIN} component={() => <AdminView />} />
			<Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
			<Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
			<Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage  />} />
			<Route exact path={routes.HOME} component={() => <HomePage />} />
			<Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />

			<hr/>
		</div>
	</Router>;
export default withAuthentication(App);*/

import React, {Fragment} from 'react';
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
import PasswordForgetView from '../PasswordForget/PasswordForget.js'
import * as routes from "../../constants/routes";

const App = () => {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Fragment>
        <Switch>
          <Route path={routes.HOME} exact component={Home} />
          <Route path={routes.WAITRESS_VIEW} exact component={WaitressView}/>
          <Route path={routes.BREAKFAST} exact component={Breakfast}/>
          <Route path={routes.LUNCH} exact component={Lunch}/>
          <Route path={routes.CHEF} exact component={ChefView}/>
          <Route path={routes.ADMIN} exact component={AdminView}/>
          <Route path={routes.PASSWORD_FORGET} exact component={PasswordForgetView}/>
          </Switch>
        </Fragment>
        </BrowserRouter>
      </div>
    );
  }


export default App;