import React from "react";

function Header({ setIsAuthenticated }) {
  const handleScrollDown = () => {
    window.scrollBy({ top: 400, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("lastActivity");    
    window.location.href = "/login"; 
  };
  const reloadPage = () => {
     window. location. reload()
     }

  return (
    <>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div onClick={reloadPage}className="text-white text-xl font-bold font-vlg hover:cursor-pointer">Go thrills</div>
        <button 
          type='button'
          className='border rounded-lg p-1 text-white'
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </nav>
      <div className="relative mt-4 w-auto bg-black shadow-lg rounded-lg shadow-black mx-3 my-auto border border-WHITE-950">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <svg
              width="30"
              height="36"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>

            <h1 className="mt-8 text-4xl font-extrabold text-white md:text-4xl lg:text-4xl animate-slidein ... font-vlg">
              Go thrill
            </h1>

            <h1 className="mt-8 text-xl font-bold tracking-tight text-white md:text-xl lg:text-xl animate-slidein ...">
              "Adventure is not just a destination, but the journey itself.
              Explore the world with Gothrill and discover the thrill of every
              path you take."
            </h1>
            <p className="mt-8 text-lg text-gray-400 animate-slidein ...">
              Discover hidden gems, thrilling activities, and captivating stories
              from around the globe.
            </p>

            <br />
            <button 
              onClick={handleScrollDown} 
              className="animate-bounce w-6 h-6 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
                opacity={0.5}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1v12m0 0 4-4m-4 4L1 9"
                />
              </svg>
            </button>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] py-1 shadow-2xl opacity-95"
              src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
