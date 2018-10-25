import React from 'react';
import { Link} from 'react-router-dom';
import * as routes from '../../constants/routes';

const Navigation = () => 
    <div>
        <ul>
            <li><Link to = {routes.SIGN_IN}>Sign In</Link></li>
            <li><Link to = {routes.SIGN_UP}>Sign Up</Link></li>
            <li><Link to = {routes.HOME}></Link>Home</li>
            <li><Link to = {routes.BREAKFAST}>Desayuno</Link></li>
            <li><Link to = {routes.LUNCH}>Comida</Link></li>
            <li><Link to = {routes.CHEF}>Cocina</Link></li>
            <li><Link to = {routes.ADMIN}>Administrador</Link></li>
            <li><Link to = {routes.PASSWORD_FORGET}>Forget Password</Link></li>
        </ul>
    </div>


export  default Navigation;