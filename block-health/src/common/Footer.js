import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer id='footer'>
            <NavLink className='link' to='/privacy' activeclassname='activeLink'>Privacy</NavLink>
            <NavLink className='link' to='/contact' activeclassname='activeLink'>Contact</NavLink>
            <h1> BlockHealth 2022 </h1>
        </footer>  
    );
}

export { Footer };