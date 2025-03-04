import React, { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Product from "./sections/Product";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Innovator from "./sections/Innovator";
import Review from "./sections/Review";
import Contact from "./sections/Contact";
import Blog from "./sections/Blog";
// import HowItWorks from "./sections/HowItWorks";

// Main homepage component
const Home = () => {
  useEffect(() => {
    // Initialize smooth scroll
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
    });
  }, []);

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
