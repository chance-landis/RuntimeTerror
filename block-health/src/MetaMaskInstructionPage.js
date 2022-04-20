import React from 'react';

export function MetaMaskInstructionPage() {
    return (
        <div id='createwallet'>

            <div className='wrapper'>
                <div className='header'>
                    <h1> How to make a MetaMask Wallet</h1>
                    <img src={require('./img/MetaMask_Fox.svg.png')} alt='metamask logo' width='200' height='200'></img>
                </div>
            </div>

            <div className='intro'>
                <p>
                With so many different crypto wallet options to choose from, we recommend MetaMask for its seamless integration into Chrome, 
                Firefox, Edge, and Brave web browsers.
                </p>
                <p>
                This tutorial will guide you on the steps to making your first wallet and where to find your unique wallet ID to receive your certification, 
                as well as any other supported blockchain transaction.
                </p>
            </div>

            <h3 className='step'> Step 1. Add the MetaMask extension to your browser</h3>
            <p className='instructions'>
            Direct your browser to metamask.io and click the download button on the top right of the screen. From there, install the MetaMask extension for 
            your chosen browser.
            </p>

            <h3 className='step'>Step 2. Opening MetaMask</h3>
            <p className='instructions'>
            Once installed, you should be able to find the MetaMask Extension icon on your browser's extension bar. Look for the fox icon like the one seen at 
            the top of the page. If not opened automatically, click the fox extension icon to be taken to the MetaMask welcome screen. From here click “Get Started” 
            and “Create a Wallet”.
            </p>

            <h3 className='step'>Step 3. Creating a Secure Password</h3>
            <p className='instructions'>
            The next step is to create a secure password for your wallet. Since this wallet will store crucial information regarding your certification, we recommend 
            using a complex and secure password. If possible, store this complex password in a trusted password manager.
            </p>

            <h3 className='step'>Step 4. Storing the Secret Recovery Phrase</h3>
            <p className='instructions'>
            Once a password is entered, MetaMask will instruct you to watch a video about their Secure Recovery Phrase. This phrase is something unique to your wallet. 
            This phrase should NOT be shared with anyone, including MetaMask themselves. If someone asks for your recovery phrase they are likely trying to scam you and 
            steal your wallet funds. After the video you are shown your recovery phrase. We recommend their tips for storing the phrase in a password manager or writing 
            down the phrase on multiple pieces of paper, storing them in different places. MetaMask cannot recover your Secret Recovery Phrase.
            </p>

            <h3 className='step'>Step 5. Confirming the Secret Recovery Phrase</h3>
            <p className='instructions'>
            The next step is to take your unique secret phrase and confirm that you have saved it correctly. If you misplace the recovery phrase you may lose access to your wallet. 
            Again, MetaMask cannot recover your Secret Recovery Phrase.
            </p>

            <h3 className='step'>Step 6. Finding the Wallet ID</h3>
            <p className='instructions'>
            Congratulations! You have successfully created a MetaMask wallet. Remember to safely store your Secret Recovery Phrase. If you need to back up your Secret Recovery Phrase, 
            you can find it in the Settings under Security. From here click “All Done” and you will be taken to a dashboard of your wallet. On the top right of the dashboard you will 
            find the three stacked dots. Click the dots and then “Account Details” and you will find the QR Code associated with your wallet and your wallet ID. You can now provide 
            this wallet ID to issuers or merchants to receive certifications and other transactions!
            </p>
        </div>  
    );
}