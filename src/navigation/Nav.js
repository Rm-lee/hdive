import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HidiveLogo from "../assets/HIDIVE_logo.svg";
import "./nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo-navlist">
          <ul className="nav-items">
            <img className="hidive-logo" src={HidiveLogo} />
            <li>SIMULCASTS</li>
            <li>DUBS</li>
            <li>SERIES</li>
            <li>MOVIES</li>
            <li>|</li>
            <li>SCHEDULE</li>
            <li>SHOP</li>
            <li>NEWS</li>
            <li>HOME</li>
          </ul>
        </div>
      </div>
      <ul className="profile-container">
        <li className="trial-button">START 14-DAY FREE TRIAL</li>
        <li><FontAwesomeIcon className="nav-icons" icon="search" /></li>
        <li><FontAwesomeIcon className="nav-icons" icon="user" /></li>
      </ul>
    </div>
  );
}
export default Nav;
