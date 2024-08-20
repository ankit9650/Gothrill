import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Logincomponent from "./components/Logincomponent";
import "./App.css";
import Toggle from "./components/Toggle";
import Login from "./components/Logincomponent";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status and handle session timeout
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const lastActivity = localStorage.getItem("lastActivity");
    const now = new Date().getTime();

    if (authStatus === "true" && lastActivity) {
      const inactivityDuration = now - parseInt(lastActivity, 10);
      const sessionTimeout = 15 * 60 * 1000; // 15 minutes

      if (inactivityDuration < sessionTimeout) {
        setIsAuthenticated(true);
        localStorage.setItem("lastActivity", now.toString());
      } else {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("lastActivity");
        setIsAuthenticated(false);
      }
    }
  }, []);

  // Update last activity time on user activity
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

  // Handle login action
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("lastActivity", new Date().getTime().toString());
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? (
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
        />
      </Routes>
    </Router>
  );
}

export default App;
