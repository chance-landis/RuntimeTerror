import React from 'react';
import { Link } from 'react-router-dom'
import workerImg from './img/workerbg.png'

export function WorkerPage() {
    return (
        <div className='worker'>

            <div className='imgContainer'>
                <img className="heroImg" src= {workerImg} alt='Medical Iconography Background Image'/>
                <div className='centerText'>
                    <h1>Regain owership of your certification</h1>
                </div>
            </div>

            <div className='wrapper'>

                <div className='bubble_title'>
                    <h2>Why Trust BlockHealth?</h2>
                </div>

                <div className='bubble_container'>

                    <div className='bubble'>
                        <h3>The job market is changing</h3>
                        <ul>
                            <li>Many careers require training, certification, or degrees.</li>
                            <li>Workers increasingly need to present certifications for hire.</li>
                            <li>Employers need to trust the validity of worker credentials.</li>
                            <li>Certifying agencies must issue, validate and re-certify.</li>
                        </ul>
                    </div>

                    <div className='bubble'>
                        <h3>Why Blockcain?</h3>
                        <ul>
                            <li>Your certification is represented as a unique token.</li>
                            <li>Each token is entirely distinct, and you own it!</li>
                            <li>These verified tokens prove your certification's validity.</li>
                            <li>You can add more tokens to your wallet as your skills grow.</li>
                        </ul>
                    </div>

                    <div className='bubble'>
                        <h3>Our Mission</h3>
                        <ul>
                            <li>You worked hard for your credential! Can you show that?</li>
                            <li>We seek to empower you through individual ownership.</li>
                            <li>We want your employer to confidently trust your skills.</li>
                            <li>Use your wallet to reflect all the skills you have gained.</li>
                        </ul>
                    </div>

                </div>

                <div className='action_wrapper'>

                    <div className='wallet_wrapper'>
                        <h3>Need help creating a wallet?</h3>
                        <Link className="button" to="/createwallet">How To Create A Wallet</Link>
                    </div>

                    <div className='certification_wrapper'>
                        <h3>Looking to verify a certification?</h3>
                        <Link className="button" to="/hashverify">Verify Certification</Link>
                    </div>

                </div>
                
            </div>
        </div>
    )
}