import React from "react";
import "../CSS/Header.css";
import { FaSearch, FaBell, FaQuestionCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header-title">Dashboard</h2>

      <div className="header-right">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <FaBell className="icon" />
        <FaQuestionCircle className="icon" />
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User Avatar"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
