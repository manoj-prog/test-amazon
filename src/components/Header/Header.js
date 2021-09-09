import React from "react";
import "./Header.css";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import IconButton from "@material-ui/core/IconButton";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { IconFlagTR, IconFlagDE, IconFlagUS } from "material-ui-flags";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import DropdownList from "react-widgets/DropdownList";

function Header() {
  return (
    <div>
      <header>
        <div style={{ zIndex: 1499 }}>
          <nav className="header">
            <div className="nav-left">
              <img
                className="home-img"
                src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
                alt="amazon"
              />
            </div>
            <div className="header-nav">
              <div>
                <PersonPinCircleIcon />
              </div>
              <div className="header-nav-branch">
                <span>Hello there updated for test</span>
                <span>Select your address</span>
              </div>
            </div>
            <div className="search-elements">
              <select name="catogeries" id="catogeries">
                <option value="books">Books</option>
                <option value="electronis">Electronics</option>
                <option value="house">House</option>
              </select>
              <input className="search-box" type="text" />
              <SearchIcon className="search-icon" />
            </div>
            <div className="language">
              {/*  <IconButton className="flag-icon"><IconFlagUS /></IconButton>
                            <ExpandMoreIcon className="expand-icon" /> */}
              <DropdownButton id="dropdown-basic-button" title="Lang">
                <Dropdown.Item href="#/action-1">
                  <IconButton className="flag-icon">
                    <IconFlagUS />
                  </IconButton>
                  US-English
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <IconButton className="flag-icon">
                    <IconFlagDE />
                  </IconButton>
                  GE-German
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <IconButton className="flag-icon">
                    <IconFlagTR />
                  </IconButton>
                  TR-Turkish
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="signin-options">
              <DropdownButton id="dropdown-basic-button" title="Hello,Sign in">
                <Dropdown.Item href="#/action-1">
                  <div className="row">
                    <button
                      className="btn btn-warning rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      sign in
                    </button>
                    <br />
                    New customer <a href="!#">Start here</a>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ul>
                        <li>
                          <b>Your list</b>
                        </li>
                        <li>Create a wish list</li>
                        <li>Baby wishlist</li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        <li>
                          <b>Your account</b>
                        </li>
                        <li>Manage your account</li>
                        <li>Your address</li>
                      </ul>
                    </div>
                  </div>
                </Dropdown.Item>
              </DropdownButton>
            </div>

            <div className="returns-orders">
              Returns <br /> & orders
            </div>
            <div className="kart">
              <ShoppingBasketIcon /> <br />
              &ensp; cart
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
