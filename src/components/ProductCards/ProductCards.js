import React from "react";
import "./ProductCards.css";
import Laptop from "../resources/laptop.jpg";
import clothing from "../resources/Clothing.jpg";
import footwear from "../resources/footwear.jpg";
import watches from "../resources/Watches.jpg";
import bags from "../resources/Bags.jpg";
import helmets from "../resources/Helmets.jpg";
import cleaning from "../resources/Cleaning.jpg";
import AmazonBlack from "../resources/amazon-black.png";
const ProductCards = () => {
  return (
    <>
      <div className="productCard-main">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>
                  <b>
                    upto 70% Off |Electronics <br />
                    Clearence store
                  </b>
                </h4>
              </div>
              <div className="card-body">
                <img className="rounded" src={Laptop} alt="lap" />
                <a className="atagExt" href="!#">
                  <br />
                  <small>see more</small>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>
                  <b>Offer for men |upto 30%</b>
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col p-3">
                    <a className="atagCat" href="!#">
                      <img src={clothing} alt="" />
                      clothing
                    </a>
                  </div>
                  <div className="col p-3">
                    {" "}
                    <a className="atagCat" href="!#">
                      <img src={footwear} alt="res" />
                      footwear
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col p-3">
                    {" "}
                    <a className="atagCat" href="!#">
                      <img src={watches} alt="wt" />
                      watches
                    </a>
                  </div>
                  <div className="col p-3">
                    {" "}
                    <a className="atagCat" href="!#">
                      <img src={bags} alt="bg" />
                      bags
                    </a>
                  </div>
                </div>
                <a className="atagExt" href="!#">
                  End of season sale
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>
                  <b>Automative accessories |upto 60% off</b>
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col p-2">
                    <a className="atagCat" href="!#">
                      <img src={helmets} alt="fs" />
                      helmets
                    </a>
                  </div>
                  <div className="col p-2">
                    {" "}
                    <a className="atagCat" href="!#">
                      <img src={cleaning} alt="res" />
                      cleaning
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col p-2">
                    {" "}
                    <a className="atagCat" href="!#">
                      <img src={watches} alt="wt" />
                      watches
                    </a>
                  </div>
                  <div className="col p-2">
                    {" "}
                    <a className="atagCat" href="!#">
                      <img src={bags} alt="bg" />
                      bags
                    </a>
                  </div>
                </div>
                <a className="atagExt" href="!#">
                  End of season sale
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>
                  <b>Sign in for best experience</b>
                </h4>
              </div>
              <div className="card-body">
                <div className="d-grid gap-2 pt-5 pb-5">
                  <button
                    className="btn btn-warning "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Sign in securely
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    <img
                      src={AmazonBlack}
                      className="img-fluid text-center ms-5 pt-3 pb-3 ps-5"
                      style={{
                        width: "250px",
                        paddingLeft: "40px",
                        marginLeft: "30px",
                        alignItems: "center",
                        height: "auto",
                      }}
                      alt="ama"
                    />
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div>
                    <div className="row p-2 display-5">Sign in</div>
                    <div className="row fw-bold p-2">
                      <small>Email or mobile phone number</small>
                    </div>
                    <div className="row p-2">
                      <input type="text" />
                    </div>
                    <div className="row p-2">
                      <button className="btn btn-warning">Continue</button>
                    </div>
                    <div className="row fs-italic p-2">
                      By continuing, you agree to Amazon's Conditions of Use and
                      Privacy Notice.
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-success">
                    Create new account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row card">
        <div className="row">
                <b className="h4">Todays Deals</b>
                <a href="#">See more</a>
              </div>
              <div className="row">
                <ul className="list-unstyled">
                  <li className="ms-5">
                    <div>
                      <a href="#">
                        <img
                          src="https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY200_.jpg"
                          alt="lap"
                        />
                      </a>
                    </div>
                    <div>
                      <span className="row fw-bold">₹20,000-₹24,000</span>
                      <span className="row text-muted">
                        <small>only today</small>
                      </span>
                    </div>
                  </li>
                </ul>
              </div> 
        <Carousel>
          <Carousel.Item>
            <a href="#">
              <img
                src="https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY200_.jpg"
                alt="lap"
              />
            </a>
          </Carousel.Item>

          <a href="#">
            <img
              src="https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY200_.jpg"
              alt="lap"
            />
          </a>

          <a href="#">
            <img
              src="https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY200_.jpg"
              alt="lap"
            />
          </a>
        </Carousel>
      </div> */}
      </div>
      <hr />
      <div className="container-fluid">
        {/* <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-4">
                          <img src={bags} class="img-fluid" alt="..." />
                        </div>
                        <div className="col-4">vfndjlk</div>
                        <div className="col-4">kmflnbgfnbf</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div> */}
        <div className="h4 fw-bold">
          Today's deals &nbsp;
          <a className="fst-italic text-decoration-none fw-normal" href="!#">
            Shop more
          </a>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row">
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹20,000-₹50,000</div>
                    <div className="fst-italic">only today</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/31X8TijgJrL._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹2,000-₹5,000</div>
                    <div className="fst-italic">Ends midnight</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/41Nsk34UzHL._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹150 onwards for top brands</div>
                    <div className="fst-italic">offer right now</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/51ivRBHcH6L._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹1,000-₹1,500 off</div>
                    <div className="fst-italic">on groceries</div>
                  </span>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row">
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/41grOPcN3WL._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹2,000-₹5,000</div>
                    <div className="fst-italic">only today</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/310fwu32toL._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹2,000-₹5,000</div>
                    <div className="fst-italic">Ends midnight</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/41Nsk34UzHL._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹150 onwards for top brands</div>
                    <div className="fst-italic">offer right now</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/51ivRBHcH6L._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹1,000-₹1,500 off</div>
                    <div className="fst-italic">on groceries</div>
                  </span>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row">
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/41MHNEHuz-L._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹20,000-₹50,000</div>
                    <div className="fst-italic">only today</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/4134w3q-NWS._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹20,000-₹50,000</div>
                    <div className="fst-italic">Ends midnight</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/41tycGEObLL._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="pics"
                  />
                  <span>
                    <div className="fw-bold">₹150 onwards on brands</div>
                    <div className="fst-italic">offer right now</div>
                  </span>
                </div>
                <div className="col-3 p-5">
                  <img
                    src="https://m.media-amazon.com/images/I/51ivRBHcH6L._AC_SY200_.jpg"
                    class="d-block img-fluid text-center"
                    alt="gro"
                  />
                  <span>
                    <div className="fw-bold">₹1,000-₹1,500 off</div>
                    <div className="fst-italic">on groceries</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ProductCards;
