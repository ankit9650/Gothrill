import React from 'react'
import BlogCard from './BlogCard'
function Content() {
  return (
   <>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-12 px-6 md:px-8 lg:px-10">
        
      <div>
      <BlogCard/>
        <div className="grid gap-6">
          {/* Second set of blog post links */}
        </div>
      </div>
      <div className="space-y-8 bg-muted/40 rounded-lg p-6">
        <div>
          <h3 className="text-lg font-bold">Categories</h3>
          <div className="mt-4 grid gap-2">
            
              Technology
         
            {/* Add other category links */}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold">Recent Posts</h3>
          <div className="mt-4 grid gap-4">
            
              <div className="aspect-w-4 aspect-h-3 w-20 overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-medium transition-colors group-hover:text-primary">
                  The Future of Web Development
                </h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                
                  <span>April 15, 2023</span>
                </div>
              </div>
           
            {/* Add other recent post links */}
          </div>
        </div>
      </div>
    </div>

   </>
  )
}

export default Content