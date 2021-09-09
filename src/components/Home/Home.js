import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import Categories from "../Categories/Categories";
import ImageSection from "../Image-section/ImageSection";
import ProductCards from "../ProductCards/ProductCards";
function Home() {
  return (
    <>
      <Header />
      <Categories />
      <ImageSection />
      <ProductCards />
    </>
  );
}

export default Home;
