import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import CatalogPage from './Pages/CatalogPage/CatalogPage'
import ProductPage from './Pages/ProductPage/ProductPage';


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
        <Route path='/product' element={ <ProductPage /> } />
      </Routes>
    </div>
  );
}

export default App;
