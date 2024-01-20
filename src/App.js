import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products"
import Contact from "./Contact"
import Cart from "./Cart"
import SingleProduct from "./SingleProduct"
import ErrorPage from "./ErrorPage"
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const App = () => {
  
  const theme = {
    colors: {
      bg: "#f6f8fa",
      footer_bg: "#0a1435",
      btn: "rbg(98, 84, 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#fff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02 ) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rbga(0, 0, 0, 0.160) 0px 1px 4px"
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle/>
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
    </ThemeProvider>
  );
};

export default App;
