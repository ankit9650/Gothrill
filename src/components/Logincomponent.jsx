import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

function Logincomponent({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication for demonstration purposes
    if (username === "admin" && password === "password") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 p-4 bg-black opacity-90 rounded-lg shadow-lg">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign in</h2>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="username" className="text-base font-medium text-gray-100">
                    Username
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-base font-medium text-gray-100">
                    Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-300 px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-blue-400"
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mt-22 ml-6 h-full w-10/12 shadow-md shadow-white rounded-md object-cover"
            src="https://i.ibb.co/dmCG3wj/login.png"
            alt="Login"
          />
        </div>
      </div>
    </section>
  );
}

export default Logincomponent;
