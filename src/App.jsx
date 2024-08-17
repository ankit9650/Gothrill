import { useState,useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Login from './components/Logincomponent'
import './App.css'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const authStatus = localStorage.getItem("isAuthenticated");
    console.log("Auth status from localStorage:", authStatus); // Debugging line
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Save authentication status
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Clear authentication status
  };
  return (
    <>
     {isAuthenticated ? (
        <>
          <Header />
          <div className="flex-grow">
            <Content />
          </div>
          <Footer />
          <button onClick={handleLogout} className="text-red-500">Logout</button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}

    </>
  )
}

export default App
