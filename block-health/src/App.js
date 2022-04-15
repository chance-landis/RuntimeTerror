import React from 'react';
import { NavBar } from './NavigationBar.js';
import { Route, Routes } from 'react-router-dom';
import { WorkerPage } from './Worker.js';

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home"></Route>
        <Route path="/workers" element={<WorkerPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
