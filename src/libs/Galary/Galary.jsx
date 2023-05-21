import React from "react";
import Marquee from "react-fast-marquee";
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
        <div className="divider">OR</div>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Collection Galary
        </h2>
        <div>
          <Marquee pauseOnHover={true} gradient={true}>
            <img className="w-40" src={car} alt="car" />
            <img className="w-40" src={car2} alt="car2" />
            <img className="w-40" src={transformer} alt="transformer" />
            <img className="w-40" src={transformer2} alt="transformer2" />
            <img className="w-40" src={disney} alt="disney" />
            <img className="w-40" src={disney2} alt="disney2" />
            <img className="w-40" src={marvel} alt="marvel" />
            <img className="w-40" src={robot} alt="robot" />
            <img className="w-40" src={robot2} alt="robot" />
            <img className="w-40" src={robot3} alt="robot" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Galary;
