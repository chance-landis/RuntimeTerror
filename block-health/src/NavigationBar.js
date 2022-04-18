import React from 'react';
import { NavLink } from 'react-router-dom';

// This function displays the navbar with 3 NavLinks
function NavBar(props) {
    return (
        <nav id='navbar'>
            <h1> BlockHealth </h1>
            <NavLink className='link' to='/home' activeclassname='activeLink'>Home</NavLink>
            <NavLink className='link' to='/workers' activeclassname='activeLink'>Workers</NavLink>
            <NavLink className='link' to='/issuers' activeclassname='activeLink'>Issuers</NavLink>
            <NavLink className='login' to='/login' activeclassname='activeLink'>Log In</NavLink>
        </nav>  
    );
}

export { NavBar };