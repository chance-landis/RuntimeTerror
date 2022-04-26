import React from 'react';
import { NavBar } from './common/NavigationBar.js';
import { Route, Routes } from 'react-router-dom';
import { WorkerPage } from './components/Worker.js';
import { HashVerificationForm } from './components/HashVerificationForm.js';
import { MetaMaskInstructionPage } from './components/MetaMaskInstructionPage.js';
import { HomePage } from './components/HomePage.js';
import { IssuerLoginForm } from './components/IssuerLoginForm.js';
import { IssuerCreateLoginForm } from './components/IssuerCreateLoginForm.js';
import { IssuerMintPage } from './components/IssuerMintPage.js';
import { MintSuccessPage } from './components/MintSuccessPage.js';
import { Footer } from './common/Footer.js';

function App() {

  return (
    <div id='page-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/workers" element={<WorkerPage/>}></Route>
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
