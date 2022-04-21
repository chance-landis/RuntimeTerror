import React from 'react';
import { Link } from 'react-router-dom';

export class IssuerCreateLoginForm extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='issuercreatelogin'>
                <div className='wrapper'>
                    <form id="input">
                        <label for="issuer-id">Create Issuer ID:</label>
                        <input type="text" class="input-bubble" placeholder="Issuer ID"/>
                        <label for="issuer-pw">Create Issuer Password:</label>
                        <input type="text" class="input-bubble" placeholder="Password"/>
                        <label for="issuer-pw-create" id="input-id">Confirm Issuer Password:</label>
                        <input type="text" class="input-bubble" placeholder="Confirm Password"/>
                        <Link className="button" to="/issuerlogin">Create Issuer Account</Link>
                    </form>
                </div>
            </div>
        )
    }
}