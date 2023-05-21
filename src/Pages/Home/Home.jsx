import React from "react";
import Carousel from "../../libs/Carousel/Carousel";
import Brands from "../../libs/Brands/Brands";
import BlogSection from "../../libs/Blog/BlogSection";
import NewsLetter from "../../libs/NewsLetter/NewsLetter";
import Galary from "../../libs/Galary/Galary";
import Tabs from "../../libs/Tabs/Tabs";
import TabsComponents from "../../libs/Tabs/Tabs";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Brands />
      <Galary />
      <TabsComponents />
      <BlogSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
