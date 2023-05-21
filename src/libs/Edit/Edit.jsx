import React, { useContext, useEffect, useState } from "react";
import banner from "../../assets/toy/illustration.svg";
import { useParams } from "react-router-dom";
import { authContext } from "../../Context/OneContext";
import Swal from "sweetalert2";

const Edit = () => {
  const { id } = useParams();
  const { user } = useContext(authContext);
  const [toy, setToy] = useState(null);
  console.log(toy);
  const updateOne = (e) => {
    e.preventDefault();
    const middle = e.target;
    const name = middle.name.value;
    const price = middle.price.value;
    const select = middle.select.value;
    const quantity = middle.number.value;
    const seller = middle.sname.value;
    const image = middle.image.value;
    const description = middle.description.value;
    const sub_category = middle.sub_category.value;
    const rating = middle.rating.value;
    const postToy = {
      name: name,
      price: price,
      category: select,
      sub_category: sub_category,
      seller: seller,
      quantity: quantity,
      image: image,
      description: description,
      rating: rating,
      features: [
        "SUPER HERO ACTION FIGURE: Web-out with the Spidey and His Amazing Friends Supersized Spidey Action Figure! This 9-inch-tall figure comes with a web accessory for ultimate imaginative play.",
        "ATTACHABLE WEB ACCESSORY: Kids can attach the included web accessory to the Spidey figure’s wrist so he can “web out” just like in the preschool animated show on Disney Junior",
        "Perfect for collectibles, home/office decors or gifting purposes : Birthday, Anniversary, Valentines day, Return gifts, Christmas, Raksha bandhan",
        "POSEABLE HEADS AND ARMS: Spidey action figure’s head and arms move, so preschoolers can move them into dynamic action poses that recreate the excitement of the TV show",
      ],
      tag: "Robot",
    };
    fetch(`https://toy-collection-server.vercel.app/api/toyCollection/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postToy),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
      });
  };
  console.log(id);
  useEffect(() => {
    fetch(`https://toy-collection-server.vercel.app/api/v1/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto mb-8">
        <div className="flex items-center gap-12 mt-16">
          <div>
            <form
              className="bg-white shadow-md w-fit p-12 rounded-lg"
              onSubmit={updateOne}
            >
              <h1 className="text-center text-3xl text-purple-300 font-bold my-4">
                Update an Exiting Toy By You!{" "}
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
                    defaultValue={toy?.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required
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
                    required
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
                    required
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
                    defaultValue={toy?.quantity}
                    required
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
                    defaultValue={toy?.price}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Price"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                  </label>
                  <select
                    name="select"
                    defaultValue={toy?.category}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
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
              <div className="flex justify-center gap-12 my-2">
                <div>
                  <label
                    htmlFor="rating"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Ranting
                  </label>
                  <input
                    type="number"
                    name="rating"
                    min="0"
                    max="5"
                    id="rating"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Rating - min - 0 & max - 5"
                    defaultValue={toy?.rating}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="sub_category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sub-Category
                  </label>
                  <input
                    type="text"
                    name="sub_category"
                    id="sub_category"
                    defaultValue={toy?.sub_category}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="For Example - Gerneral Car, Smart Car, Arm Edge"
                    required
                  />
                </div>
              </div>
              <div className="my-2">
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={toy?.image}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Toy Photo URL"
                    required
                  />
                </div>
              </div>
              <div className="my-2">
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    className="textarea w-full textarea-bordered"
                    placeholder="Enter Toy Description"
                    name="description"
                    id="description"
                    defaultValue={toy?.description}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="btn w-1/2">update</button>
              </div>
            </form>
          </div>
          <div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
