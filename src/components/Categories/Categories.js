import React from "react";
import { useHistory } from "react-router";
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
  const history = useHistory();
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
                      <a
                        onClick={() => history.push("/menfashion")}
                        style={{ cursor: "pointer" }}
                      >
                        Men's fashion
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => history.push("/book")}
                        style={{ cursor: "pointer" }}
                      >
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
                  <a
                    href="!#"
                    onClick={() => history.push("/menfashion")}
                    class="nav-link active"
                    aria-current="page"
                  >
                    <span>MensFashion</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    onClick={() => history.push("/book")}
                    style={{ cursor: "pointer" }}
                  >
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
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Sell</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Coupons</span>
                  </a>
                </li>
                <li class="nav-item product-hover ml-2">
                  <a class="nav-link active" aria-current="page" href="!#">
                    <span>Cars&Motor</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Categories;
