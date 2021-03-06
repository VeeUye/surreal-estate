import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/navbars/large-navbar.css";

const LargeNavBar = () => {
  return (
    <div className="desktop-navbar">
      <div className="desktop-navbar-inner-left">
        <BiBuildingHouse />
        <h3 className="desktop-navbar-title">Surreal Estate</h3>
      </div>
      <div className="desktop-navbar-inner-right">
        <ul className="desktop-navbar-links">
          <li className="desktop-navbar-links-item">
            <Link className="text-link" to="/">
              View Properties
            </Link>
          </li>
          <li className="desktop-navbar-links-item">
            <Link className="text-link" to="/add-property">
              Add Properties
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LargeNavBar;
