import React from "react";
import TeslaLogo from "../assets/logo.svg";
import "./header.css";
import HamburgerDrawer from "./HamburgerDrawer";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
      <Link to="/">
          <img src={TeslaLogo} alt="main_logo" style={{ width: "80px" }} />
      </Link>
      </div>
      <div className="header__links">
          <Link to="/models"><p>Model s</p></Link>
          <Link to="/model3"><p>Model 3</p></Link>
          <Link to="/modelx"><p>Model x</p></Link>
          <Link to="/modely"><p>Model y</p></Link>
          <p>solar roof</p>
          <p>solar panel</p>
      </div>
      <div className="header__right">
        <p>Shop</p>
        <p>Account</p>
        <HamburgerDrawer />
      </div>
    </div>
  );
}

export default Header;
