import React from 'react';
import { NavBar } from './NavigationBar.js';
import { Route, Routes } from 'react-router-dom';
import { WorkerPage } from './Worker.js';
import { HashVerificationForm } from './HashVerificationForm.js';
import { MetaMaskInstructionPage } from './MetaMaskInstructionPage.js';
import { HomePage } from './HomePage.js';
import { IssuerLoginForm } from './IssuerLoginForm.js';
import { IssuerCreateLoginForm } from './IssuerCreateLoginForm.js';
import { IssuerMintPage } from './IssuerMintPage.js';
import { MintSuccessPage } from './MintSuccessPage.js';

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/workers" element={<WorkerPage/>}></Route>
        <Route path="/hashverify" element={<HashVerificationForm/>}></Route>
        <Route path="/createwallet" element={<MetaMaskInstructionPage/>}></Route>
        <Route path='/issuerlogin' element={<IssuerLoginForm/>}></Route>
        <Route path='/createissueraccount' element={<IssuerCreateLoginForm/>}></Route>
        <Route path='/issuermint' element={<IssuerMintPage/>}></Route>
        <Route path='/mintsuccess' element={<MintSuccessPage/>}></Route>
      </Routes>
    </div>
  );
  
}

export default App;
