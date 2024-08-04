import React, { useState } from "react";
import BlogCard from "./BlogCard";

const initialBlogData = [
    {
      title: "Exploring the Majesty of the Himalayas: A Journey to Leh-Ladakh",
      author: "Rohit",
      date: "April 15, 2023",
      excerpt: "Nestled in the northernmost region of India, Leh-Ladakh is a paradise for mountain lovers...",
      imageUrl: "https://images.pexels.com/photos/3392154/pexels-photo-3392154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "The Mystical Charm of Himachal Pradesh: A Sojourn in Manali",
      author: "Harsh",
      date: "May 1, 2023",
      excerpt: "Manali, a high-altitude Himalayan resort town in Himachal Pradesh, is a popular backpacking and honeymoon destination...",
      imageUrl: "https://images.unsplash.com/photo-1590265788376-5d99eb11976e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Serenity and Spirituality in Uttarakhand: Rishikesh and Mussoorie",
      author: "Ankit Prabhaker",
      date: "June 1, 2023",
      excerpt: "Uttarakhand, known as the 'Land of the Gods,' boasts spectacular mountain scenery and serene environments...",
      imageUrl: "https://images.pexels.com/photos/20035462/pexels-photo-20035462/free-photo-of-elderly-woman-meditating-in-front-of-a-statue-of-parvati-on-the-ganges.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "The Unexplored Beauty of the Northeast: Tawang, Arunachal Pradesh",
      author: "Emily Davis",
      date: "July 15, 2023",
      excerpt: "Tawang, located in the northeastern state of Arunachal Pradesh, is a hidden gem waiting to be discovered...",
      imageUrl: "https://images.unsplash.com/photo-1626761627604-f27d98885f4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

function Content() {
  const [blogs, setBlogs] = useState(initialBlogData);
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    date: "",
    excerpt: "",
    imageUrl: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-12 px-6 md:px-8 lg:px-10">
      <div className="space-y-8">
        <div className="grid gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="group" aria-label="Blog post">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-sm shadow-black">
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
                <p className={`text-muted-foreground ${expandedBlogs[index] ? '' : 'line-clamp-3'}`}>
                  {blog.excerpt}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-primary hover:underline text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700"
                >
                  {expandedBlogs[index] ? 'Read Less' : 'Read More'}
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
  );
}

export default Content;
