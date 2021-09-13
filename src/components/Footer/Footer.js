import "./Footer.css";
import React from "react";
import AmazonImg from "../resources/amazon-white-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import onChange from "react";
// import _onSelect from "react";

function Footer() {
  const options = ["English", "hindi", "Tamil", "Telugu", "Malayalam"];
  const defaultOption = options[0];
  return (
    <div className="container-fluid">
      <div className="row footer-1 display-6 p-2">
        <a href="#top">back to top</a>
      </div>
      <div className="row footer-2">
        <div className="col-3 p-5">
          <b>Get to Know Us</b>
          <ul>
            <li>
              <a href="!#">About us</a>
            </li>
            <li>
              <a href="!#">career</a>
            </li>
            <li>
              <a href="!#">Press Release</a>
            </li>
          </ul>
        </div>
        <div className="col-3 p-5">
          <b>Connect with Us</b>
          <ul>
            <li>
              <a href="!#">twitter</a>
            </li>
            <li>
              <a href="!#">Facebook</a>
            </li>
            <li>
              <a href="!#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="col-3 p-5">
          <b>Make Money with Us</b>
          <ul>
            <li>
              <a href="!#">Sell on Amazon</a>
            </li>
            <li>
              <a href="!#">Sell under Amazon Accelerator</a>
            </li>
            <li>
              <a href="!#">Amazon Global Selling</a>
            </li>
            <li>
              <a href="!#"> Become an Affiliate Fulfilment by Amazon</a>
            </li>
            <li>
              <a href="!#">Advertise Your Products</a>
            </li>
            <li>
              <a href="!#">Amazon Pay on Merchants</a>
            </li>
          </ul>
        </div>
        <div className="col-3 p-5">
          <b>Let Us Help You</b>
          <ul>
            <li>
              <a href="!#">COVID-19 and Amazon Help</a>
            </li>
            <li>
              <a href="!#">Your Account</a>
            </li>
            <li>
              <a href="!#">Returns Centre</a>
            </li>
            <li>
              <a href="!#">100% Purchase Protection</a>
            </li>
            <li>
              <a href="!#">Amazon App Download</a>
            </li>
            <li>
              <a href="!#">Amazon Assistant Download</a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
      <div className="row footer-3 ">
        <div className="row">
          <div className="col float-end my-5">
            <img
              className="image-fluid float-end"
              src={AmazonImg}
              alt="amawhite"
            />
          </div>
          <div className="col float-start my-5">
            <Dropdown
              options={options}
              value={defaultOption}
              className="float-start"
              placeholder="Select an option"
            />
          </div>
        </div>
        <div className="row Country-contents">
          <ul className=" d-flex justify-content-center p-3">
            <li>
              <a href="!#">Australia</a>
            </li>
            <li>
              <a href="!#">Brazil</a>
            </li>
            <li>
              <a href="!#">Canada</a>
            </li>
            <li>
              <a href="!#">China</a>
            </li>
            <li>
              <a href="!#">France</a>
            </li>
            <li>
              <a href="!#">Germany</a>
            </li>
            <li>
              <a href="!#">Italy</a>
            </li>
            <li>
              <a href="!#">Japan</a>
            </li>
            <li>
              <a href="!#">Mexico</a>
            </li>
            <li>
              <a href="!#">Netherlands</a>
            </li>
            <li>
              <a href="!#">Poland</a>
            </li>
            <li>
              <a href="!#">Singapore</a>
            </li>
            <li>
              <a href="!#">Spain</a>
            </li>
            <li>
              <a href="!#">Turkey</a>
            </li>
            <li>
              <a href="!#">United Arab Emirates</a>
            </li>
            <li>
              <a href="!#">United Kingdom</a>
            </li>
            <li>
              <a href="!#">United States</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row footer-4 d-flex justify-content-center p-4">
        <div className="d-flex justify-content-center">
          <a className="p-3" href="!#">
            Conditions of Use & Sale
          </a>
          <a className="p-3" href="!#">
            Privacy Notice
          </a>
          <a className="p-3" href="!#">
            {" "}
            Interest-Based Ads
          </a>
        </div>
        © 1996-2021, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default Footer;
