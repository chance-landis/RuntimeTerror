import React from 'react';
import { NavBar } from './NavigationBar.js';
import { Route, Routes } from 'react-router-dom';
import { WorkerPage } from './Worker.js';
import { HashVerificationForm } from './HashVerificationForm.js';

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home"></Route>
        <Route path="/workers" element={<WorkerPage/>}></Route>
        <Route path="/hashverify" element={<HashVerificationForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
