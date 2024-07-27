import React from "react";

function Header() {
  return (
    <div className="relative w-auto bg-gradient-to-r from-slate-700 to-blue-900  my-2 mx-3 ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <svg
            width="30"
            height="36"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>

          <h1 className="mt-8 text-4xl font-extrabold  text-black md:text-4xl lg:text-4xl animate-slidein ... font-vlg ">
            Go thrill
          </h1>

          <h1 className="mt-8 text-xl font-bold tracking-tight text-black md:text-xl lg:text-xl animate-slidein ...">
            "Adventure is not just a destination, but the journey itself.
            Explore the world with Gothrill and discover the thrill of every
            path you take."
          </h1>
          <p className="mt-8 text-lg text-gray-400 animate-slidein ...">
            Discover hidden gems, thrilling activities, and captivating stories
            from around the globe.
          </p>

          <div className="mt-4">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Checkout 
              </span>
            </button>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] py-1 shadow-2xl"
            src="https://plus.unsplash.com/premium_photo-1678481760861-000b6f8904df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
