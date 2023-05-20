import React from "react";
import banner from "../../assets/banner/transformer.png";
import banner1 from "../../assets/banner/banner1.webp";
import banner2 from "../../assets/banner/banner2.webp";
import { Link } from "react-router-dom";
const Carousel = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full h-[450px]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex bg-[#ECE3E1] w-full items-center justify-around rounded-lg">
            <div>
              <h2 className="text-6xl font-bold mb-4">
                Best Toys Store <br /> & Online MarketPlace
              </h2>
              <h3 className="text-3xl font-semibold mb-6">
                Give The Gift Of Your Children Everyday
              </h3>
              <Link
                to="/alltoys"
                className="border px-4 py-2 text-2xl bg-purple-700 rounded-lg text-white"
              >
                All Toys
              </Link>
            </div>
            <img src={banner} className="w-[500px] h-[350px] " />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex bg-[#ECE3E1] w-full items-center justify-around rounded-lg">
            <div>
              <h2 className="text-6xl font-bold mb-4">
                Best Toys Store <br /> & Online MarketPlace
              </h2>
              <h3 className="text-3xl font-semibold mb-6">
                Give The Gift Of Your Children Everyday
              </h3>
              <Link
                to="/alltoys"
                className="border px-4 py-2 text-2xl bg-purple-700 rounded-lg text-white"
              >
                All Toys
              </Link>
            </div>
            <img src={banner1} className="w-[500px] h-[350px]" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex bg-[#ECE3E1] w-full items-center justify-around rounded-lg">
            <div>
              <h2 className="text-6xl font-bold mb-4">
                Best Toys Store <br /> & Online MarketPlace
              </h2>
              <h3 className="text-3xl font-semibold mb-6">
                Give The Gift Of Your Children Everyday
              </h3>
              <Link
                to="/alltoys"
                className="border px-4 py-2 text-2xl bg-purple-700 rounded-lg text-white"
              >
                All Toys
              </Link>
            </div>
            <img src={banner2} className="w-[500px] h-[350px]" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
