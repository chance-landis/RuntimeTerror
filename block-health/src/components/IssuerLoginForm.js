import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../database/Database.js'

export function IssuerLoginForm() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
         <div className='issuerlogin'>
            <div className='wrapper'>
                <form className="form">
                    <label>Issuer ID:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input-bubble" placeholder="Email"/>
                    <label>Issuer Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="input-bubble" placeholder="Password"/>
                    <div>
                        <Link className='link' to="/issuer/resetpassword">Forgot Password</Link>
                        <Link className="link" to="/issuer/createaccount">Register Issuer Account</Link>
                    </div>
                    <button className='login' onClick={() => login(email, password, navigate)}>Log In</button>
                </form>
            </div>
        </div>
    )
}

async function login(email, password, navigate) {
    try {
        const {user, error} = await supabase.auth.signIn({email, password})
        if (error) {
            throw error
        }
        alert('Logged In!')
        navigate('/', {replace:true})
    } catch (error) {
        console.log(error.message)
    }
}