import React from 'react';

export function MintSuccessPage() {
    return (
        <div className='mint_success'>
            <div className='wrapper'>
                <div className='header'> 
                    <p>Congratulations</p>

                    <text>Certification Minted to Wallet ID:</text>
                    <p>XXXXXXXXXXXXXXXX</p>
                </div>

                <div className='transaction'>
                    <text>Find proof of transaction here:</text>
                    <a href="https://etherscan.io/">https://etherscan.io/</a>
                </div>

                <div className='hash'>
                    <p>Unique Certification Transaction Hash:</p>
                    <a href="">0x771c133c3a72e2d262ec3268cb79b8774cc173168ae823e66ce3cfb9243d1d92</a>
                </div>
            </div>
        </div>
    )
}