import React from "react";
import Product from "./sections/Product";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Innovator from "./sections/Innovator";
import Review from "./sections/Review";
import Contact from "./sections/Contact";
import Blog from "./sections/Blog";

//Main homepage component
const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Showcase />
      <Innovator />
      <Blog />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;
