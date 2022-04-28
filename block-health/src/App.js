import React from 'react';
import { NavBar } from './common/NavigationBar.js';
import { Route, Routes } from 'react-router-dom';
import { WorkerPage } from './Worker.js';
import { AboutPage } from './AboutPage.js';
import { HashVerificationForm } from './HashVerificationForm.js';
import { MetaMaskInstructionPage } from './MetaMaskInstructionPage.js';
import { HomePage } from './HomePage.js';
import { IssuerLoginForm } from './IssuerLoginForm.js';
import { IssuerCreateLoginForm } from './IssuerCreateLoginForm.js';
import { IssuerMintPage } from './IssuerMintPage.js';
import { MintSuccessPage } from './MintSuccessPage.js';
import { Footer } from './common/Footer.js';

function App() {

  return (
    <div id='page-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/workers" element={<WorkerPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/hashverify" element={<HashVerificationForm/>}></Route>
        <Route path="/createwallet" element={<MetaMaskInstructionPage/>}></Route>
        <Route path='/issuer/login' element={<IssuerLoginForm/>}></Route>
        <Route path='/issuer/createaccount' element={<IssuerCreateLoginForm/>}></Route>
        <Route path='/issuer/mint' element={<IssuerMintPage/>}></Route>
        <Route path='/issuer/mintsuccess' element={<MintSuccessPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
  
}

export default App;
