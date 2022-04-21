import React from 'react';
import { Link } from 'react-router-dom';

export class IssuerCreateLoginForm extends React.Component {

    render() {
        return (
            <div className='issuercreatelogin'>
                <div className='wrapper'>
                    <form className='form'>
                        <label for="issuer-id">Create Issuer ID:</label>
                        <input type="text" class="input-bubble" placeholder="Issuer ID"/>
                        <label for="issuer-pw">Create Issuer Password:</label>
                        <input type="text" class="input-bubble" placeholder="Password"/>
                        <label for="issuer-pw-create" id="input-id">Confirm Issuer Password:</label>
                        <input type="text" class="input-bubble" placeholder="Confirm Password"/>
                        <Link className="create_account" to="/issuer/login">Create Issuer Account</Link>
                    </form>
                </div>
            </div>
        )
    }
}