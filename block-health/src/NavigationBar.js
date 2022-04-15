import React from 'react';
import { NavLink } from 'react-router-dom';

// This function displays the navbar with 3 NavLinks
function NavBar(props) {
    return (
        <nav id='navbar'>
            <h1> BlockHealth </h1>
            <NavLink className='link' exact to={'${/}'} activeclassname='activeLink'>Home</NavLink>
            <NavLink className='link' exact to={'${/}'} activeclassname='activeLink'>Workers</NavLink>
            <NavLink className='link' exact to={'${/}'} activeclassname='activeLink'>Issuers</NavLink>
            <NavLink className='login' exact to={'${/}'} activeclassname='activeLink'>Log In</NavLink>
        </nav>  
    );
}

export { NavBar };