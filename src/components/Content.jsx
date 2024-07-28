import React from "react";
import BlogCard from "./BlogCard";
const blogData = [
  {
    title: "The Future of Web Development",
    author: "John Doe",
    date: "April 15, 2023",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia...",
    imageUrl:
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "The Rise of Artificial Intelligence",
    author: "Jane Smith",
    date: "May 1, 2023",
    excerpt:
      "Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl...",
    imageUrl:
      "https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "The Impact of Remote Work",
    author: "Michael Johnson",
    date: "June 1, 2023",
    excerpt:
      "Nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl...",
    imageUrl:
      "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "The Future of Renewable Energy",
    author: "Emily Davis",
    date: "July 15, 2023",
    excerpt:
      "Eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia...",
    imageUrl:
      "https://images.pexels.com/photos/1076109/pexels-photo-1076109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function Content() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-12 px-6 md:px-8 lg:px-10">
        <div className="space-y-8">
          <div className="grid gap-6">
            {blogData.map((blog, index) => (
              <a key={index} className="group" aria-label="Blog post">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-sm shadow-black">
                  <img
                    src={blog.imageUrl}
                    alt="Blog post image"
                    className="object-cover transition-all group-hover:scale-105 "
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-bold transition-colors group-hover:text-primary">
                    {blog.title}
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span>{blog.author}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <p className="line-clamp-3 text-muted-foreground">
                    {blog.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="grid gap-6">
            <BlogCard blogData={blogData} />
          </div>
        </div>
        {/* side  */}

        <div className="space-y-8 bg-muted/40 rounded-lg p-6">
        
        </div>

      </div>
    </>
  );
}

export default Content;
