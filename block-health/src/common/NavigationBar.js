import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav id='navbar'>
            <h1> BlockHealth </h1>
            <NavLink className='link' to='/' activeclassname='activeLink'>Home</NavLink>
            <NavLink className='link' to='/workers' activeclassname='activeLink'>Workers</NavLink>
            <NavLink className='link' to='/issuer/login' activeclassname='activeLink'>Issuers</NavLink>
            <NavLink className='link' to='/about' activeclassname='activeLink'>About</NavLink>
            <NavLink className='login' to='/issuer/login' activeclassname='activeLink'>Log In</NavLink>
        </nav>  
    );
}

export { NavBar };