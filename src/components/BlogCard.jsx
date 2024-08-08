import React from "react";

function BlogCard({ blogData }) {
  // Assuming blogData is an array of blog objects
  const recentPosts = blogData.slice(-3).reverse(); // Get the 3 most recent posts

  return (
    <>
      <div className="space-y-8">
        <div className="grid gap-6">
        
          <div>
            <h3 className="text-lg font-bold" >Recent Posts</h3>
            <div className="mt-2 grid gap-4">
              {recentPosts.map((blog, index) => (
                <div key={index} className="space-y-1 rounded-sm py-1 px-1 shadow-black shadow-xl">
                  <img src={blog.imageUrl} alt="" />
                  <h4 className="text-base font-medium transition-colors group-hover:text-primary">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {blog.date} by {blog.author}
                  </p>
                  
                </div>
              ))}
            </div>
          </div>

          {/* Example Featured Post (static for now) */}
         
        </div>
      </div>
    </>
  );
}

export default BlogCard;
