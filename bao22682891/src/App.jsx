import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import './App.css';

function App() {
  return (
    <>
        <div className="app">
            <Sidebar />
            <div className="main-content">
            <Header />
            </div>
        </div>
    </>

  );
}

export default App;
