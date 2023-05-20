import React from 'react';
import car from '../../assets/brands/car.png';
import pinata from '../../assets/brands/pinata.png';
import disney from '../../assets/brands/disney.png';
import marvel from '../../assets/brands/marvel.png';
import transformer from '../../assets/brands/transformer.png';
const Brands = () => {
    return (
      <div className="container mx-auto mt-12">
        <h1 className="text-3xl font-bold text-center mb-3">
          Supported By Brands
        </h1>
        <div className="flex justify-around items-center">
          <div>
            <img className="w-48" src={car} alt="" />
          </div>
          <div>
            <img className="w-48" src={pinata} alt="" />
          </div>
          <div>
            <img className="w-48" src={disney} alt="" />
          </div>
          <div>
            <img className="w-48" src={marvel} alt="" />
          </div>
          <div>
            <img className="w-48" src={transformer} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Brands;