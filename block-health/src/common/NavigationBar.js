import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js'

function NavBar() {

    const { currentUser, logout } =  useAuth()
    const [error, setError] = useState();

    async function handleLogout() {
        setError('')

        try {
            await logout()
        } catch {
            setError('Failed to log out')
        }
    }

    let userAction;
    let issuerNavTo;

    // If the user is currently logged in, display user information and logout link
    if (currentUser) {
        userAction = <div className='userAction'>
                        <h3>Currently logged in as {currentUser.email}</h3>  
                        <h4 className='logout' onClick={handleLogout} activeclassname='activeLink'>Log Out</h4>
                     </div>
        issuerNavTo = '/issuer/mint'
    } else {
        userAction = <div className='userAction'><NavLink className='login' to='/issuer/login' activeclassname='activeLink'>Log In</NavLink></div>
        issuerNavTo = '/issuer/login'
    }

    return (
        <nav id='navbar'>
            <h1> BlockHealth </h1>
            <NavLink className='link' to='/' activeclassname='activeLink'>Home</NavLink>
            <NavLink className='link' to='/workers' activeclassname='activeLink'>Workers</NavLink>
            <NavLink className='link' to={ issuerNavTo } activeclassname='activeLink'>Issuers</NavLink>
            { userAction }
        </nav>  
    );
}

export { NavBar };

