import React from 'react';
import { Link } from 'react-router-dom'

export function IssuerMintPage() {
    return (
        <div id='mint'>
            <form id="input">
                <label for="wallet-id">Enter Worker Wallet ID:</label>
                <input type="text" name="wallet-id" class="input-bubble" placeholder="Worker Wallet ID"/>
                <label for="confirm-id">Confirm Worker Wallet ID:</label>
                <input type="text" name="confirm" class="input-bubble" placeholder="Worker Wallet ID"/>
                <div>
                    <label for="upload">Upload File to Tokenize:</label>
                    <button>Upload File</button>
                </div>
                
                <p>Current fee to mint is: $5.83 USD/100 GWEI</p>
                <Link className="button" to="/mintsuccess">Mint Certification</Link>
            </form>
        </div>
    )
}