import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Categories.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// import { colors } from "@material-ui/core";
const Categories = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="row">
            <div className="col">
              <Button variant="light" onClick={handleShow}>
                <MenuOpenIcon className="toggle-icon" />
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header
                  style={{ backgroundColor: "#7c7c7c", color: "white" }}
                  closeButton
                >
                  <Offcanvas.Title>
                    {" "}
                    <AccountCircleIcon /> Hello, Sign in
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="side-pannel rounded">
                    <li>
                      <div>
                        <b>Trending</b>
                      </div>
                    </li>
                    <li>
                      <a href="!#">Best Seller</a>
                    </li>
                    <li>
                      <a href="!#">New release</a>
                    </li>
                    <hr />
                    <li>
                      <b>Digital Content And Devices</b>
                    </li>
                    <li>
                      <a href="!#">
                        Echo <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Alexa
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Fire Tv
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Alexa
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                    <hr />

                    <li>
                      <b>Shop By Department</b>
                    </li>
                    <li>
                      <a href="!#">
                        Mobiles,Computer{" "}
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Tv Appliances
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Men's fashion
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Women's fashion
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <div className="col">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
                <li class="nav-item product-hover ml-2 ">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Mobiles</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>BestSeller</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Fashion</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>CustomerService</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Today'sDeals</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>NewRealeses</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Computers</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>homeKitchen</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Toys&games</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Books</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="product-hover">
            <span>Mobiles</span>
          </div> */}
            {/* <div>
            <a href="#">BestSeller</a>
          </div>
          <div>
            <a href="#">Fashion</a>
          </div>
          <div>
            <a href="#">AmazonPay</a>
          </div>
          <div>
            <a href="#">CustomerService</a>
          </div>
          <div>
            <a href="#">Today'sDeals</a>
          </div>
          <div>
            <a href="#">NewRealeses</a>
          </div>
          <div>
            <a href="#">Computers</a>
          </div>
          <div>
            <a href="#">homeKitchen</a>
          </div>
          <div>
            <a href="#">Toys&games</a>
          </div>
          <div>
            <a href="#">Books</a>
          </div>
          <div>
            <a href="#">Sell</a>
          </div> */}
            <div
              className="col product-hover hover-img"
              style={{ padding: "0px 10px" }}
            >
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
                alt="img"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Categories;
