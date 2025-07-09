import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          
          <Route path="/tshirts" element={<CategoryPage category="tshirts" />} />
          <Route path="/shirts" element={<CategoryPage category="shirts" />} />
          <Route path="/jeans" element={<CategoryPage category="jeans" />} />
          <Route path="/trousers" element={<CategoryPage category="trousers" />} />
          <Route path="/jackets" element={<CategoryPage category="jackets" />} />
          <Route path="/accessories" element={<CategoryPage category="accessories" />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
