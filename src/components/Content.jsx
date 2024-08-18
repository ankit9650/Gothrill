import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function Content() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    date: "",
    excerpt: "",
    imageUrl: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Track if we are editing
  const [editIndex, setEditIndex] = useState(null); // Track which blog to edit

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
    if (isEditing) {
      // Update existing blog
      const updatedBlogs = [...blogs];
      updatedBlogs[editIndex] = newBlog;
      setBlogs(updatedBlogs);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new blog
      setBlogs((prevState) => [...prevState, newBlog]);
    }
    setNewBlog({ title: "", author: "", date: "", excerpt: "", imageUrl: "" });
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    setBlogs((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setNewBlog(blogs[index]);
    setEditIndex(index);
    setIsEditing(true);
    setIsModalOpen(true);
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
                    onClick={() => handleEdit(index)}
                    className="text-white hover:text-yellow-600 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 ml-2 hover:text-red-600 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setIsEditing(false); // Make sure we're in add mode
              setIsModalOpen(true);
            }}
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
              <h2 className="text-2xl font-bold mb-4">{isEditing ? "Update Blog" : "Add New Blog"}</h2>
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                    {isEditing ? "Update Blog" : "Add Blog"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsEditing(false);
                      setEditIndex(null);
                    }}
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
