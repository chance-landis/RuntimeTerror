import React from 'react';
import { Link } from 'react-router-dom';

export class IssuerLoginForm extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='issuerlogin'>
                <div className='wrapper'>
                    <form id="input">
                        <label for="issuer-id">Issuer ID:</label>
                        <input type="text" class="input-bubble" placeholder="Issuer ID"/>
                        <label for="issuer-pw">Issuer Password:</label>
                        <input type="text" class="input-bubble" placeholder="Password"/>
                        <a href=""><label for="forgotPassword">Forgot Password</label></a>
                        <Link className="button" to="/createissueraccount">Register Issuer Account</Link>
                        <Link className="button" to="/issuermint">Login</Link>
                    </form>
                </div>
            </div>
        )
    }
}