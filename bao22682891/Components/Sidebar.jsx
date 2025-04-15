import { useState } from 'react'
import '../CSS/Sidebar.css'
import { FaTachometerAlt, FaProjectDiagram, FaUsers, FaChartPie, FaEnvelope, FaCode } from "react-icons/fa";

function Sidebar() {

  return (
    <>
          <div className="sidebar">
      <div className="logo">Logo</div>

      <nav className="nav-menu">
        <ul>
          <li><FaTachometerAlt /> <span>Dashboard</span></li>
          <li><FaProjectDiagram /> <span>Projects</span></li>
          <li><FaUsers /> <span>Teams</span></li>
          <li><FaChartPie /> <span>Analytics</span></li>
          <li><FaEnvelope /> <span>Messages</span></li>
          <li><FaCode /> <span>Integrations</span></li>
        </ul>
      </nav>

      <div className="sidebar-promo">
        <img src="https://via.placeholder.com/150x100" alt="Promo" />
        <h4>V2.0 is available</h4>
        <button>Try now</button>
      </div>
    </div>
    </>
  )
}

export default Sidebar
