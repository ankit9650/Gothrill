import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function Content() {
  const [blogs, setBlogs] = useState([]); // Start with an empty array
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    date: "",
    excerpt: "",
    imageUrl: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (savedBlogs && savedBlogs.length > 0) {
      setBlogs(savedBlogs);
    }
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      localStorage.setItem('blogs', JSON.stringify(blogs));
    }
  }, [blogs]);

  const toggleExpand = (index) => {
    setExpandedBlogs((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs((prevState) => [...prevState, newBlog]);
    setNewBlog({ title: "", author: "", date: "", excerpt: "", imageUrl: "" });
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    setBlogs((prevState) => prevState.filter((_, i) => i !== index));
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
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-600 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add New Blog
          </button>
        </div>
        <div>
          <div className="grid gap-6">
            <BlogCard blogData={blogs} />
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={newBlog.title}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={newBlog.author}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newBlog.date}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={newBlog.excerpt}
                    onChange={handleInputChange}
                    className="mt-1 text-justify block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    rows="3"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={newBlog.imageUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Blog
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;





// is modal 
{/* <div className="fixed inset-0 bg-black w-full bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
  <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label for="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">
        Title
      </label>
      <input
        type="text"
        name="title"
        value={newBlog.title}
         placeholder="Title"
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
        required
      />
    </div>
    <div>
      <label for="Author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">
        Author
      </label>

      <input
        type="text"
        name="author"
        value={newBlog.author}
        placeholder="Author"
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div>


      <label className="block text-sm font-medium text-gray-700">
        Date
      </label>

      <div class="relative max-w-sm">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          datepicker
          id="default-datepicker"
          type="date"
          name="date"
          class="bg-gray-50 border mt-1  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
          value={newBlog.date}
          onChange={handleInputChange}                    
          required
        />
      </div>

    </div>
    <div>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
      >
        Your message
      </label>

      <textarea
        name="excerpt"
        value={newBlog.excerpt}
        onChange={handleInputChange}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
        id="message"
        rows="4"
        required
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-500">
        Image URL
      </label>
      <input
        type="url"
        name="imageUrl"
        value={newBlog.imageUrl}
        onChange={handleInputChange}
        placeholder="Add image url"
        className="block p-2.5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        required
      />
    </div>
    <div className="flex gap-4">
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Blog
      </button>
      <button
        type="button"
        onClick={() => setIsModalOpen(false)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Cancel
      </button>
    </div>
  </form>
</div>
</div> */}