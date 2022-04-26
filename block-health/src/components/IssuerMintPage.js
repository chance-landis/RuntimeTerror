import React from 'react';
import { Link } from 'react-router-dom'

export function IssuerMintPage() {
    return (
        <div className='mint'>
            <div className='wrapper'>
                <form className="form">
                    <label for="wallet-id">Enter Worker Wallet ID:</label>
                    <input type="text" name="wallet-id" class="input-bubble" placeholder="Worker Wallet ID"/>
                    <label for="confirm-id">Confirm Worker Wallet ID:</label>
                    <input type="text" name="confirm" class="input-bubble" placeholder="Worker Wallet ID"/>
                    <div>
                        <label for="upload">Upload File to Tokenize:</label>
                        <button className='upload_button'>Upload File</button>
                    </div>

                    <div className='rect'>
                        <text className='preview'>File Preview</text>
                    </div>
                    
                    <div className='mint_info'>
                        <text>Current fee to mint is:</text>
                        <text>$5.83 USD</text>
                        <text>100 GWEI</text>
                    </div>

                    <Link className="mint_button" to="/issuer/mintsuccess">Mint Certification</Link>
                </form>
            </div>
        </div>
    )
}