import React from "react";
import { MdHouseSiding } from "react-icons/md";
import "../styles/navbars/large-navbar.css";

const LargeNavBar = () => {
  return (
    <div className="desktop-navbar">
      <div className="desktop-navbar-inner-left">
        <MdHouseSiding />
        <h3 className="desktop-navbar-title">Surreal Estate</h3>
      </div>
      <div className="desktop-navbar-inner-right">
        <ul className="desktop-navbar-links">
          <li className="desktop-navbar-links-item">View Properties</li>
          <li className="desktop-navbar-links-item">Add a Property</li>
        </ul>
      </div>
    </div>
  );
};

export default LargeNavBar;
