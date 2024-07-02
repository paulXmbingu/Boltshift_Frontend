import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import CatalogPage from './Pages/CatalogPage/CatalogPage'

import { Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/catalog' element={ <CatalogPage /> } />
      </Routes>
    </div>
  );
}

export default App;
