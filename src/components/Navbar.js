import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <nav className="navbar">
      <h2>Men's Store</h2>
      <div className="nav-links">
        <Link to="/tshirts">T-Shirts</Link>
        <Link to="/shirts">Shirts</Link>
        <Link to="/jeans">Jeans</Link>
        <Link to="/trousers">Trousers</Link>
        <Link to="/jackets">Jackets</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
