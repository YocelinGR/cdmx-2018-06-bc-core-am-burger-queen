import React from 'react';
import { Link} from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import './NavBar.css';


const NavBar = () => {
    return (
        <Navbar brand='Home' right className ='nav-style'>
            <NavItem>Home<Link to='/' className="brand-logo"></Link></NavItem>
            <NavItem>Meseros<Link to='/WaitressView' className="brand-logo"></Link></NavItem>
            <NavItem>Chef<Link to='/ChefView' className="brand-logo"></Link></NavItem>
            <NavItem>Administrador<Link to='/AdminView' className="brand-logo"></Link></NavItem>
        </Navbar>
    );
}

export default NavBar;