import React from 'react';

export function MintSuccessPage() {
    return (
        <div id='mint-success'>
            <p>Congratulations</p>
            <p>Certification Minted to Wallet ID:</p>
            <p>XXXXXXXXXXXXXXXX</p>

            <div>
                <p>Find proof of transaction here:</p>
                <a href="https://etherscan.io/">https://etherscan.io/</a>
            </div>

            <p>Unique Certification Transaction Hash:</p>
            <a href="">0x771c133c3a72e2d262ec3268cb79b8774cc173168ae823e66ce3cfb9243d1d92</a>
        </div>
    )
}