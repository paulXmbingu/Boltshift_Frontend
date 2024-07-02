import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import CatalogPage from './Pages/CatalogPage/CatalogPage'
import ProductPage from './Pages/ProductPage/ProductPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage';
import ShoppingCartEmpty from './Pages/ShoppingCartPage/ShoppingCartEmptyPage';
import WishListPage from './Pages/WishListPage/WishListPage';
import WishListEmptyPage from './Pages/WishListPage/WishListEmptyPage';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage';
import PersonalInfo from './Pages/PersonalInfoPage/PersonalInfo';
import OrdersPage from './Pages/OrdersPage/OrdersPage';
import VouchersPage from './Pages/VouchersPage/VouchersPage';
import UnAvailablePage from './Pages/UnAvailablePage/UnAvailablePage';


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
        <Route path='/cart' element={ <ShoppingCartPage /> } />
        <Route path='/cartEmpty' element={ <ShoppingCartEmpty /> } />
        <Route path='/wishlist' element={ <WishListPage /> } />
        <Route path='/wishlistEmpty' element={ <WishListEmptyPage /> } />
        <Route path='/checkout' element={ <CheckOutPage /> } />
        <Route path='/personalInfo' element={ <PersonalInfo /> } />
        <Route path='/order' element={ <OrdersPage /> } />
        <Route path='/vouchers' element={ <VouchersPage /> } />
        <Route path='/404' element={ <UnAvailablePage /> }  />
      </Routes>
    </div>
  );
}

export default App;
