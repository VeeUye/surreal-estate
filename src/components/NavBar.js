import React, { useMemo } from "react";
import MediaQuery from "react-responsive";
import { IconContext } from "react-icons";
import LargeNavBar from "./LargeNavBar";
import MobileNavBar from "./MobileNavBar";
import "../styles/navbars/navbar.css";

const NavBar = () => {
  const cssClass = useMemo(
    () => ({ className: "react-icons", size: "4rem" }),
    []
  );
  return (
    <IconContext.Provider value={cssClass}>
      <MediaQuery minWidth={1024}>
        <LargeNavBar />
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
        <MobileNavBar />
      </MediaQuery>
    </IconContext.Provider>
  );
};

export default NavBar;
