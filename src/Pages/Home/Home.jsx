import React from 'react';
import Carousel from '../../libs/Carousel/Carousel';
import Brands from '../../libs/Brands/Brands';
import BlogSection from '../../libs/Blog/BlogSection';
import NewsLetter from '../../libs/NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Brands />
            <BlogSection />
            <NewsLetter/>
        </div>
    );
};

export default Home;