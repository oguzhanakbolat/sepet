import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Basket from "../pages/Basket";
import Home from "../pages/Home";

function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="basket" element={<Basket />} />
    </Routes>
  )
}

export default Router;
