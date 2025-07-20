import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SliderShow from "./sliderShow/SliderShow";
import AllProducts from "./categoryDisplay/allProducts/AllProducts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route main element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <SliderShow />
      <AllProducts />
      <Footer />
    </>
  );
}

export default App;
