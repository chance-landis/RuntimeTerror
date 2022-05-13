import React, { useRef, useState } from 'react';
import { useAuth } from './contexts/AuthContext.js'
import { useNavigate, Link } from 'react-router-dom'
import Button from '@mui/material/Button'

export function IssuerLoginForm() {

    const navigate = useNavigate()
    const { login } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/issuer/mint')
        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    }

    return (
        <div className='issuerlogin'>
            <div className='wrapper'>
                {error && <h1>{error}</h1>}
                <form className="form" onSubmit={handleSubmit}>
                    <label for="issuer-id">Issuer ID:</label>
                    <input type="text" className="input-bubble" ref={emailRef} placeholder="Issuer ID"/>
                    <label for="issuer-pw">Issuer Password:</label>
                    <input type="password" className="input-bubble" ref={passwordRef} placeholder="Password"/>
                    <div>
                        <Link className='link' to="/issuer/resetpassword">Forgot Password</Link>
                        <Link className="link" to="/issuer/createaccount">Register Issuer Account</Link>
                    </div>
                    <Button className='login' variant="contained" disabled={loading} type="submit">Login</Button>
                </form>
            </div>
        </div>
    )
}