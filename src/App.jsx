<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Login from "./components/Logincomponent";
import "./App.css";
=======
import { useState,useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import './App.css'
import Toggle from './components/Account/Toggle/Toggle'
>>>>>>> c09258b1156aaf8b7a89e2bb421b6612f7fb2fbd

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const authStatus = localStorage.getItem("isAuthenticated");
    const lastActivity = localStorage.getItem("lastActivity");
    const now = new Date().getTime();

    if (authStatus === "true" && lastActivity) {
      const inactivityDuration = now - parseInt(lastActivity);
      const sessionTimeout = 15 * 60 * 1000; // 15 minutes in milliseconds

      if (inactivityDuration < sessionTimeout) {
        setIsAuthenticated(true);
        localStorage.setItem("lastActivity", now.toString());
      } else {
        // Session timed out
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("lastActivity");
        setIsAuthenticated(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const handleActivity = () => {
        localStorage.setItem("lastActivity", new Date().getTime().toString());
      };

      window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);

      return () => {
        window.removeEventListener("mousemove", handleActivity);
        window.removeEventListener("keydown", handleActivity);
      };
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("lastActivity", new Date().getTime().toString());
  };

  return (
    <>
      {isAuthenticated ? (
        <>
         <Header setIsAuthenticated={setIsAuthenticated} />

          <div className="flex-grow">
            <Content />
          </div>
          <Footer />
        </>
      ) : (
        <Toggle onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
