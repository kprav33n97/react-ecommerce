import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products"
import Contact from "./Contact"
import Cart from "./Cart"
import SingleProduct from "./SingleProduct"
import ErrorPage from "./ErrorPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
