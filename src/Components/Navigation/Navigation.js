import React from 'react';
import { Link} from 'react-router-dom';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut/SignOut';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><Link to={routes.BREAKFAST}>Desayuno</Link></li>
    <li><Link to={routes.LUNCH}>Comida</Link></li>
    <li><Link to={routes.CHEF}>Chef</Link></li>
    <li><Link to={routes.ADMIN}>Administrador</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;