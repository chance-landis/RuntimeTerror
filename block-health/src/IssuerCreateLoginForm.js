import React, { useRef, useState } from 'react';
import { useAuth } from './contexts/AuthContext.js'
import { useNavigate } from 'react-router-dom'

export function IssuerCreateLoginForm() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value != passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            navigate('/issuer/login')
        } catch {
            setError('Failed to create account')
        }

        setLoading(false)
    }

    return (
        <div className='issuercreatelogin'>
            <div className='wrapper'>
                {error && <h1>{error}</h1>}
                <form className='form' onSubmit={handleSubmit}>
                    <label for="issuer-id">Create Issuer ID:</label>
                    <input type="text" class="input-bubble" ref={emailRef} placeholder="Issuer ID"/>
                    <label for="issuer-pw">Create Issuer Password:</label>
                    <input type="password" class="input-bubble" ref={passwordRef} placeholder="Password"/>
                    <label for="issuer-pw-create" id="input-id">Confirm Issuer Password:</label>
                    <input type="password" class="input-bubble" ref={passwordConfirmRef} placeholder="Confirm Password"/>
                    <button className="create_account" disabled={loading} type='submit'>Create Issuer Account</button>
                </form>
            </div>
        </div>
        )
}