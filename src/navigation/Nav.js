import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HidiveLogo from "../assets/HIDIVE_logo.svg";
import "./nav.css";

function Nav() {
  const [searchExpand, setSearchExpand] = useState(false);
  const closeSearch = () => {
    const searchbar = document.querySelector("#searchbar");
    const trialButton = document.querySelector("#trial-button");
    if (searchExpand) {
      setTimeout(() => {
        searchbar.style.display = "none";
        trialButton.style.display = "block";
      }, 800);
    } else {
      searchbar.style.display = "block";
      trialButton.style.display = "none";
    }
  };
  useEffect(() => {
    const searchbar = document.querySelector("#searchbar");
    searchbar.style.display = "none";
  }, []);
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo-navlist">
          <ul className="nav-items">
            <img className="hidive-logo" src={HidiveLogo} alt="hidive logo" />
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
        <ul className="profile-container">
          <li id="trial-button" className="trial-button">
            START 14-DAY FREE TRIAL
          </li>
          <li>
            <div
              id="searchbar"
              className={
                searchExpand ? "searchbar expanded" : "searchbar retract"
              }
            >
              <input placeholder="  Search Titles..." />{" "}
            </div>
          </li>
          <li>
            <FontAwesomeIcon
              onClick={() => {
                closeSearch();
                setSearchExpand(!searchExpand);
              }}
              className="nav-icons"
              icon="search"
            />
          </li>
          <li>
            <FontAwesomeIcon className="nav-icons" icon="user" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
