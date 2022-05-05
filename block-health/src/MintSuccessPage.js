import React from 'react';
import { useLocation } from 'react-router-dom'

export function MintSuccessPage() {

    const {state} = useLocation()
    const { hash, workerID } = state;
    const _transactionRef = "https://ropsten.etherscan.io/tx/" + hash
    return (


        <div className='mint_success'>
            <div className='wrapper'>
                <div className='header'> 
                    <p>Congratulations</p>

                    <text>Certification Minted to Wallet ID:</text>
                    <p>{workerID}</p>
                </div>

                <div className='transaction'>
                    <text>Find proof of transaction here:</text>
                    <a href={_transactionRef}>Etherscan Transaction Page</a>
                </div>

                <div className='hash'>
                    <p>Unique Certification Transaction Hash:</p>
                    <a className="hash" href={_transactionRef}>{hash}</a>
                </div>
            </div>
        </div>
    )
}