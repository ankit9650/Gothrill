import React from "react";
import BlogCard from "./BlogCard";
 const blogData = [
  {
    title: "Exploring the Majesty of the Himalayas: A Journey to Leh-Ladakh",
    author: "Rohit",
    date: "April 15, 2023",
    excerpt: "Nestled in the northernmost region of India, Leh-Ladakh is a paradise for mountain lovers. The stark, rugged beauty of the Himalayas surrounds you as you traverse through winding roads and high mountain passes. Leh, the capital, is an enchanting town filled with Buddhist monasteries, stupas, and vibrant local markets. ",
    imageUrl: "https://images.pexels.com/photos/3392154/pexels-photo-3392154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "The Mystical Charm of Himachal Pradesh: A Sojourn in Manali",
    author: "Harsh",
    date: "May 1, 2023",
    excerpt: "Manali, a high-altitude Himalayan resort town in Himachal Pradesh, is a popular backpacking and honeymoon destination. Surrounded by towering peaks and lush green valleys, Manali offers a mix of tranquility and adventure. The Solang Valley is perfect for adventure sports like paragliding and skiing, while the Rohtang Pass provides stunning panoramic views and snow activities. ",
    imageUrl: "https://images.unsplash.com/photo-1590265788376-5d99eb11976e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Serenity and Spirituality in Uttarakhand: Rishikesh and Mussoorie",
    author: "Ankit prabhaker",
    date: "June 1, 2023",
    excerpt: "Uttarakhand, known as the 'Land of the Gods,' boasts spectacular mountain scenery and serene environments. Rishikesh, the Yoga Capital of the World, is located at the foothills of the Himalayas along the banks of the Ganges River. This spiritual town offers yoga and meditation retreats, as well as thrilling white-water rafting. ",
    imageUrl: "https://images.pexels.com/photos/20035462/pexels-photo-20035462/free-photo-of-elderly-woman-meditating-in-front-of-a-statue-of-parvati-on-the-ganges.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "The Unexplored Beauty of the Northeast: Tawang, Arunachal Pradesh",
    author: "Emily Davis",
    date: "July 15, 2023",
    excerpt: "Tawang, located in the northeastern state of Arunachal Pradesh, is a hidden gem waiting to be discovered. Perched at an elevation of 10,000 feet, Tawang is known for its stunning landscapes, Buddhist monasteries, and vibrant culture. The Tawang Monastery, the largest in India, is a spiritual haven and offers breathtaking views of the valley below.",
    imageUrl: "https://images.unsplash.com/photo-1626761627604-f27d98885f4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
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
                    <div className="flex items-center gap-1 font-bold underline">
                      <span>{blog.author}:</span>
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

   
      </div>
    </>
  );
}

export default Content;
