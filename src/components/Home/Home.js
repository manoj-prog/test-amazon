import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import Categories from "../Categories/Categories";
import ImageSection from "../Image-section/ImageSection";
import ProductCards from "../ProductCards/ProductCards";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <Categories />
      <ImageSection />
      <ProductCards />
      <Footer />
    </>
  );
}

export default Home;
