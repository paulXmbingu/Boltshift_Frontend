import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  useEffect(() => {
    // Function to set a cookie with a specified name, value, and expiration date
    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Set a cookie named "Boltshift" with value "John Doe" that expires in 30 days
    setCookie("Boltshift", "John Doe", 30);
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
