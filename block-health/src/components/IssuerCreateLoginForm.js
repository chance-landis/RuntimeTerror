import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../database/Database.js'

export function IssuerCreateLoginForm() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='issuercreatelogin'>
            <div className='wrapper'>
                <form className='form'>
                    <label>Create Issuer ID:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input-bubble" placeholder="Email"/>
                    <label>Create Issuer Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="input-bubble" placeholder="Password"/>
                    <button className="create_account" onClick={() => signup(email, password, navigate)}>Create Issuer Account</button>
                </form>
            </div>
        </div>
    )
}

async function signup(email, password, navigate) {
    try {
        const {user, error} = await supabase.auth.signUp({email, password})
        if (error) {
            throw error
        }
        alert('Sign Up Success!')
        navigate('/issuer/login', {replace:true})
    } catch (error) {
        console.log(error.message)
    }
}