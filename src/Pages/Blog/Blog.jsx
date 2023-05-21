import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import useTitle from "../../libs/Hook/useTitle";

const Blog = () => {
  const { id } = useParams();
  useTitle("Blog");
  const [getData, setData] = useState(null);
  console.log(getData);
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {getData && (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic justify-between">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        {getData?.seller}
                      </a>
                      <p className="text-base font-light text-gray-500 dark:text-gray-400">
                        {getData?.email || "toymarket@gmail.com"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <ReactStars
                      size={25}
                      value={getData?.rating}
                      edit={false}
                    />
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {getData?.name}
                </h1>
              </header>
              <p className="lead">{getData?.description}</p>
              <figure>
                <img src={getData?.image} alt="" />
                <figcaption>Digital art by {getData?.seller}</figcaption>
              </figure>

              {getData?.featuers &&
                getData?.featuers.map((fg, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li className="lead">{fg}</li>
                    </React.Fragment>
                  );
                })}
            </article>
          </div>
        </main>
      )}
    </div>
  );
};

export default Blog;
