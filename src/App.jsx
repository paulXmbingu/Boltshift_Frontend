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
import PaymentsPage from './Pages//PaymentsPage/PaymentsPage';
import VouchersPage from './Pages/VouchersPage/VouchersPage';
import UnAvailablePage from './Pages/UnAvailablePage/UnAvailablePage';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignupPage/SignUpPage';
import ForgotPasswordPage from './Pages/PasswordResetPages/ForgotPasswordPage';
import CheckEmailPage from './Pages/PasswordResetPages/ResetEmail';
import ResetEmail from './Pages/PasswordResetPages/ResetEmail';
import SetNewPassword from './Pages/PasswordResetPages/SetNewPassword';
import SuccessfulResetPage from './Pages/PasswordResetPages/SuccessfulResetPage';
import SuccessfulPWResetEmailPage from './Pages/PasswordResetPages/SuccessfulPWResetEmailPage';

function App() {
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
        <Route path='/orders' element={ <OrdersPage /> } />
        <Route path='/payments' element={ <PaymentsPage /> } />
        <Route path='/vouchers' element={ <VouchersPage /> } />
        <Route path='/404' element={ <UnAvailablePage /> } />
        <Route path='/signIn' element={ <SignInPage /> } />
        <Route path='/signUp' element={ <SignUpPage /> } />
        <Route path='/forgotPassword' element={ <ForgotPasswordPage /> } />
        <Route path='/checkEmail' element={ <CheckEmailPage /> } />
        <Route path='/resetEmail' element={ <ResetEmail /> } />
        <Route path='/newPassword' element={ <SetNewPassword /> } />
        <Route path='/successfulReset' element={ <SuccessfulResetPage /> } />
        <Route path='/successfulPWResetEmail' element={ <SuccessfulPWResetEmailPage /> } />
      </Routes>
    </div>
  );
};

export default App;
