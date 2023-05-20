import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/temp")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="bg-white pb-24">
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {blogs &&
                blogs.map((post) => (
                  <article
                    key={post.id}
                    className="flex max-w-xl flex-col items-start justify-between"
                  >
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.publish_date}
                      </time>
                      <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        {post.post_category}
                      </p>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <p>
                          <span className="absolute inset-0" />
                          {post.topic.question}
                        </p>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.topic.answer}
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={post.img}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <p>
                            <span className="absolute inset-0" />
                            {post.author_name}
                          </p>
                        </p>
                        <p className="text-gray-600">
                          {post.author_job_position}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
