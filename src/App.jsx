import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import OTPSection from "./components/OTPSection";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Header from "./components/Navbar";
import ShopPage from "./pages/ShopPage";
import Compare from "./pages/Compare";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import TrackOrderDetails from "./pages/TrackOrderDetails";
import WishList from "./pages/WishList";
import AddToCart from "./pages/AddToCart";
import Checkout from "./pages/Checkout";
import OrderSuccessPage from "./pages/OrderSuccess";
import TrackOrder from "./pages/TrackOrder";
import ResetPassword from "./components/ResetPassword";
import PageNotFound from "./components/PageNotFound";
import NeedSupport from "./pages/NeedSupport";
import CustomerSupport from "./pages/CustomerSupport";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* If the path is "/", show the Home component */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* If the path is "/login", show the Login component */}
          <Route path="/" element={<Home />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/user-auth" element={<SignUp />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/track-details" element={<TrackOrderDetails />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/add-Cart" element={<AddToCart />} />
          <Route path="/otp" element={<OTPSection />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/need-support" element={<NeedSupport />} />

          <Route path="/compare-product" element={<Compare />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/Order-success" element={<OrderSuccessPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
