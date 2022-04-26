import React from 'react';

function HomePage() {
    return (
        <div className="home">
            <div className='wrapper'>
                <h2>Use the power of the blockchain to secure your certifications and empower workers</h2>

                <h4>BlockHealth is a blockchain solution thaa empowers workers. We give back individual ownership
                to Healthcare certifications, all powered by Ethereum.</h4>

                <div>
                    <div>
                        <img src="" alt=""/>
                        <h4>Issue Certifications</h4>
                        <p>Upload and issue certifications straight to the worker's wallet</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <h4>Stored Securely</h4>
                        <p>Certifications are stored securely in the wallet of the worker's choice</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <h4>Verifiable</h4>
                        <p>Workers can verify their certification and prove ownership of their skills</p>
                    </div>
                </div>

                <h4>Learn more about BlockHealth. Talk to the team.</h4>
                <button>Contact Us</button>
            </div>
        </div>
    );
}

export { HomePage };