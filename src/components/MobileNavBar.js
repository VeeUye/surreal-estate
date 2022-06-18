import React from "react";
import { MdHouseSiding } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/navbars/mobile-navbar.css";

const MobileNavBar = () => {
  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-inner-left">
        <MdHouseSiding />
      </div>
      <div className="mobile-navbar-inner-right">
        <h3 className="mobile-navbar-title">Surreal Estate</h3>
        <ul className="mobile-navbar-links">
          <li className="mobile-navbar-links-item">
            <Link className="text-link" to="/">
              View Properties
            </Link>
          </li>
          <li className="mobile-navbar-links-item">
            <Link className="text-link" to="/add-property">
              Add a Property
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavBar;
