import React from "react";

function BlogCard() {
      
  return (
    
    <>
    
      <div className="space-y-8">
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-bold">Categories</h3>
            <div className="mt-4 grid gap-2">
              Technology
              {/* Add other category links */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Recent Posts</h3>
            <div className="mt-2 grid gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-medium transition-colors group-hover:text-primary"></h4>
              </div>

              {/* Add other recent post links */}
            </div>
          </div>

          <a className="group" aria-label="Blog post">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Blog post image"
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h2 className="text-2xl font-bold transition-colors group-hover:text-primary">
                The Future of Web Development
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span>John Doe</span>
                </div>

                <div className="flex items-center gap-1">
                  <span>April 15, 2023</span>
                </div>
              </div>
              <p className="line-clamp-3 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
