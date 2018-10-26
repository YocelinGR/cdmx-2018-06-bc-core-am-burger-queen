import React from 'react';
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
export default withAuthentication(App);

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