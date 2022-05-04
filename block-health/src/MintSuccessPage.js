import React from 'react';

export function MintSuccessPage() {
    return (
        <div className='mint_success'>
            <div className='wrapper'>
                <div className='header'> 
                    <p>Congratulations</p>

                    <text>Certification Minted to Wallet ID:</text>
                    <p>0xf0798F6498F7c6C3aF8BEA680e0380a9928Ec787</p>
                </div>

                <div className='transaction'>
                    <text>Find proof of transaction here:</text>
                    <a href="https://ropsten.etherscan.io/tx/0xe4b5cd1370d5863ec381b9825e5e4dceedacbd921415a1b280e0a535ab764dba">https://ropsten.etherscan.io/tx/0xe4b5cd1370d5863ec381b9825e5e4dceedacbd921415a1b280e0a535ab764dba</a>
                </div>

                <div className='hash'>
                    <p>Unique Certification Transaction Hash:</p>
                    <p>0xe4b5cd1370d5863ec381b9825e5e4dceedacbd921415a1b280e0a535ab764dba</p>
                </div>
            </div>
        </div>
    )
}