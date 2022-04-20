import React from 'react';
import { NavBar } from './NavigationBar.js';
import { Route, Routes } from 'react-router-dom';
import { WorkerPage } from './Worker.js';
import { HashVerificationForm } from './HashVerificationForm.js';
import { MetaMaskInstructionPage } from './MetaMaskInstructionPage.js';

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home"></Route>
        <Route path="/workers" element={<WorkerPage/>}></Route>
        <Route path="/hashverify" element={<HashVerificationForm/>}></Route>
        <Route path="/createwallet" element={<MetaMaskInstructionPage/>}></Route>
      </Routes>
    </div>
  );
  
}

export default App;
