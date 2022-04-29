import React from 'react';
import certLogo from './img/cert.png'
import walletImg from './img/wallet.png'
import shieldImg from './img/shield.png'
import Button from '@mui/material/Button'

function HomePage() {
    return (
        <div className="home">
            <div className='wrapper'>
                <h2>Use the power of the blockchain to secure your certifications and empower workers</h2>

                <h3>BlockHealth is a blockchain solution that empowers workers. We give back individual ownership
                to Healthcare certifications, all powered by Ethereum.</h3>

                <div className="imgLayout">
                    <div className="imgCard">
                        <img className="homeImg" src={certLogo} alt="Certification"/>
                        <h4>Issue Certifications</h4>
                        <p>Upload and issue certifications straight to the worker's wallet</p>
                    </div>
                    <div className="imgCard">
                        <img className="homeImg" src={walletImg} alt="Wallet"/>
                        <h4>Stored Securely</h4>
                        <p>Certifications are stored securely in the wallet of the worker's choice</p>
                    </div>
                    <div className="imgCard">
                        <img className="homeImg" src={shieldImg} alt="Shield"/>
                        <h4>Verifiable</h4>
                        <p>Workers can verify their certification and prove ownership of their skills</p>
                    </div>
                </div>

                <h3>Learn more about BlockHealth. Talk to the team.</h3>
                <div>
                    <Button variant="contained">Contact Us</Button>
                </div>
            </div>
        </div>
    );
}

export { HomePage };