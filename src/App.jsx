import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
