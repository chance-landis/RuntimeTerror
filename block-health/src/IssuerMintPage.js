import React, { useRef } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { mintNFT } from './util/interact'
import { useNavigate } from 'react-router-dom'
import { CallToActionSharp } from '@mui/icons-material';

export function IssuerMintPage() {

    const workerIDRef = useRef()
    const confirmWorkerIDRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault(e);

        if (workerIDRef.current.value != confirmWorkerIDRef.current.value) {
            console.log('Worker IDs do not match')
            return;
        }
        await mintNFT(workerIDRef.current.value).then((hash) => {
            console.log("hash: " + hash)
            navigate('/issuer/mintsuccess', {state: {hash: hash, workerID: workerIDRef.current.value} });
        });
    };
      
    return (
        <div className='mint'>
            <div className='wrapper'>
                <form className="form" onSubmit={(e => handleSubmit(e))}>
                    <label>Enter Worker Wallet ID:</label>
                    <input type="text" name="wallet-id" ref={workerIDRef} placeholder="Worker Wallet ID"/>
                    <label>Confirm Worker Wallet ID:</label>
                    <input type="text" name="confirm" ref={confirmWorkerIDRef} placeholder="Worker Wallet ID"/>
                    <div>
                        <label>Upload File to Tokenize:</label>
                        <button className='upload_button'>Upload File</button>
                    </div>

                    <div className='rect'>
                        <p className='preview'>File Preview</p>
                    </div>
                    
                    <div className='mint_info'>
                        <p>Current fee to mint is:</p>
                        <p>$5.83 USD</p>
                        <p>100 GWEI</p>
                    </div>
                    <button className="mint_button" type='submit'>Mint Certification</button>
                </form>
            </div>
        </div>
    )
}