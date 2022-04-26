import React from 'react';
import { Link } from 'react-router-dom';

export class IssuerLoginForm extends React.Component {

    render() {
        return (
            <div className='issuerlogin'>
                <div className='wrapper'>
                    <form className="form">
                        <label for="issuer-id">Issuer ID:</label>
                        <input type="text" className="input-bubble" placeholder="Issuer ID"/>
                        <label for="issuer-pw">Issuer Password:</label>
                        <input type="text" className="input-bubble" placeholder="Password"/>
                        <div>
                            <Link className='link' to="/issuer/resetpassword">Forgot Password</Link>
                            <Link className="link" to="/issuer/createaccount">Register Issuer Account</Link>
                        </div>
                        <Link className='login_link' to="/issuer/mint"><input className="login" type="submit" value="Login"/></Link>
                    </form>
                </div>
            </div>
        )
    }
}