import React from "react";
import car from "../../assets/galary/car.jpg";
import car2 from "../../assets/galary/car2.webp";
import transformer from "../../assets/galary/transfomer3.webp";
import transformer2 from "../../assets/galary/transformer2.webp";
import disney from "../../assets/galary/disney1.jpg";
import disney2 from "../../assets/galary/disney2.webp";
import marvel from "../../assets/galary/marvel.webp";
import robot from "../../assets/galary/robot.jpg";
import robot2 from '../../assets/galary/robot2.jpg';
import robot3 from '../../assets/galary/robot3.png';
const Galary = () => {
  return (
    <div className="container mx-auto mt-12">
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Collection Galary
        </h2>
        <div className="grid grid-cols-5 gap-4">
          <img className="w-48" src={car} alt="car" />
          <img className="w-48" src={car2} alt="car2" />
          <img className="w-48" src={transformer} alt="transformer" />
          <img className="w-48" src={transformer2} alt="transformer2" />
          <img className="w-48" src={disney} alt="disney" />
          <img className="w-48" src={disney2} alt="disney2" />
          <img className="w-48" src={marvel} alt="marvel" />
          <img className="w-48" src={robot} alt="robot" />
          <img className="w-48" src={robot2} alt="robot" />
          <img className="w-48" src={robot3} alt="robot" />
        </div>
      </div>
    </div>
  );
};

export default Galary;
