import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function UserContent() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (savedBlogs && savedBlogs.length > 0) {
      setBlogs(savedBlogs);
    }
  }, []);

  const toggleExpand = (index) => {
    setExpandedBlogs((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gradient-start to-gradient-end bg-[length:200%_200%] animate-gradient-animation">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-12 px-6 md:px-8 lg:px-10">
        <div className="space-y-8">
          <div className="grid gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="group" aria-label="Blog post">
                <div className="w-3/4 overflow-hidden rounded-lg shadow-sm shadow-black">
                  <img
                    src={blog.imageUrl}
                    alt="Blog post image"
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-bold transition-colors group-hover:text-primary">
                    {blog.title}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="flex items-center gap-1 font-bold underline">
                      <span>{blog.author}:</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <p className={`text-muted-foreground overflow-hidden transition-all duration-300 ease-in-out ${expandedBlogs[index] ? 'max-h-none' : 'max-h-[3.6rem]'}`}>
                    {blog.excerpt}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-primary hover:underline text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    {expandedBlogs[index] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="grid gap-6">
            <BlogCard blogData={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserContent;
