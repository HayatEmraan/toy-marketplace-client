import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import car from "../../assets/brands/car.png";
import pinata from "../../assets/brands/pinata.png";
import disney from "../../assets/brands/disney.png";
import marvel from "../../assets/brands/marvel.png";
import transformer from "../../assets/brands/transformer.png";
const Brands = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center mb-3">
        Supported By Brands
      </h1>
      <div className="flex justify-around items-center">
        <div data-aos="fade-up">
          <img className="w-48" src={car} alt="" />
        </div>
        <div data-aos="fade-down">
          <img className="w-48" src={pinata} alt="" />
        </div>
        <div data-aos="fade-right">
          <img className="w-48" src={disney} alt="" />
        </div>
        <div data-aos="fade-left">
          <img className="w-48" src={marvel} alt="" />
        </div>
        <div data-aos="fade-up-right">
          <img className="w-48" src={transformer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
