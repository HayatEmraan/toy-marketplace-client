import React, { useContext } from "react";
import banner from "../../assets/toy/illustration.svg";
import { authContext } from "../../Context/OneContext";

const AddAToy = () => {
    const { user } = useContext(authContext);
    const addNewtoy = (e) => {
        e.preventDefault();
        const middle = e.target;
        const name = middle.name.value;
        const price = middle.price.value;
        const select = middle.select.value;
        const quantity = middle.number.value;
        console.log(name, price, quantity, select);
    }
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-12 mt-16">
        <div>
          <form
            className="bg-white shadow-md w-fit p-12 rounded-lg"
            onSubmit={addNewtoy}
          >
            <h1 className="text-center text-3xl text-purple-300 font-bold my-4">
              Add A Brand New Toy By You!{" "}
            </h1>
            <div className="flex justify-center gap-12">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Toy Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="sname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Seller Name
                </label>
                <input
                  type="text"
                  name="sname"
                  defaultValue={user.displayName}
                  id="sname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  disabled
                  required=""
                />
              </div>
            </div>
            <div className="flex justify-center gap-12 my-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Seller Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Seller Email"
                  disabled
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  defaultValue={0}
                  required=""
                />
              </div>
            </div>
            <div className="flex justify-center gap-12">
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Price"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option name="select" value="Robot">
                    Robot
                  </option>
                  <option name="select" value="Marvel">
                    Marvel
                  </option>
                  <option name="select" value="Disney">
                    Disney
                  </option>
                  <option name="select" value="Car">
                    Car
                  </option>
                  <option name="select" value="Transformer">
                    Transformer
                  </option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="btn w-1/2">Save</button>
            </div>
          </form>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
