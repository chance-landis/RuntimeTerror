import React, { useRef } from 'react';
import { mintNFT } from './util/interact'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

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
        await mintNFT(workerIDRef.current.value).then((result) => {
            if (result == 1) {
                console.log('You cannot issue to the same wallet you are issuing from')
                return;
            } else {
                console.log("hash: " + result)
                navigate('/issuer/mintsuccess', {state: {hash: result, workerID: workerIDRef.current.value} });
            }
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
                        <p>Current fee to mint is:<br/>
                        $5.83 USD <br/>
                        100 GWEI</p>
                    </div>
                    <Button className="mint_button" variant="contained" type='submit'>Mint Certification</Button>
                </form>
            </div>
        </div>
    )
}