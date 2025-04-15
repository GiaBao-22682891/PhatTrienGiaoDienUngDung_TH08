import React from 'react';
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import DashboardContent from "../Components/DashboardContent";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}


export default App;
