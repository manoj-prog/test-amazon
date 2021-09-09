import React from "react";
import "./ImageSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Alexa from "../resources/alexa.jpg";
import AmazonFas from "../resources/amazonFas.jpg";
import Furniture from "../resources/furniture.jpg";
const ImageSection = () => {
  return (
    <div className="carousel--local">
      <Carousel style={{ zIndex: "2" }}>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage "
            src={Alexa}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage "
            src={AmazonFas}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage "
            src={Furniture}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSection;
