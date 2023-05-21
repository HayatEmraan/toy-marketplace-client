import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const TabsData = ({ props }) => {
  const [tabsData, setTabsData] = useState(null);
  console.log(props);
  console.log(tabsData);
  useEffect(() => {
    fetch(`http://localhost:3000/api/${props ? `cat/${props}` : "all"}`)
      .then((res) => res.json())
      .then((data) => setTabsData(data));
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      {tabsData &&
        tabsData.map((tab) => {
          return (
            <div
              key={tab._id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div data-aos="zoom-in">
                <img
                  className="p-8 rounded-t-lg w-[400px] h-[300px]"
                  src={tab?.image}
                  alt="product image"
                />
              </div>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {tab?.name}
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                  <ReactStars size={22} value={tab?.rating} edit={false} />
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {tab?.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${tab?.price}
                  </span>
                  <Link
                    to={`/details/${tab?._id}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TabsData;
