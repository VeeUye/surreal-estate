import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/navbars/mobile-navbar.css";

const MobileNavBar = () => {
  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-inner-left">
        <BiBuildingHouse className="mobile-react-icon" size="3rem" />
      </div>
      <div className="mobile-navbar-inner-right">
        <ul className="mobile-navbar-links">
          <li className="mobile-navbar-links-item">
            <Link className="text-link" to="/">
              View Properties
            </Link>
          </li>
          <li className="mobile-navbar-links-item">
            <Link className="text-link" to="/add-property">
              Add Properties
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavBar;
