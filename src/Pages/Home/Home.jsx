import React from "react";
import Carousel from "../../libs/Carousel/Carousel";
import Brands from "../../libs/Brands/Brands";
import BlogSection from "../../libs/Blog/BlogSection";
import NewsLetter from "../../libs/NewsLetter/NewsLetter";
import Galary from "../../libs/Galary/Galary";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Brands />
      <Galary />
      <BlogSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
