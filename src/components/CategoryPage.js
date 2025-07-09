import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const allProducts = [
  { id: 1, name: "Slim T-Shirt", price: 499, category: "tshirts", image: "/images/tshirt.jpg" },
  { id: 2, name: "Formal Shirt", price: 799, category: "shirts", image: "/images/shirt.jpg" },
  { id: 3, name: "Blue Jeans", price: 1299, category: "jeans", image: "/images/jeans.jpg" },
  { id: 4, name: "Black Trousers", price: 999, category: "trousers", image: "/images/trousers.jpg" },
  { id: 5, name: "Winter Jacket", price: 1999, category: "jackets", image: "/images/jacket.jpg" },
  { id: 6, name: "Wrist Watch", price: 2499, category: "accessories", image: "/images/watch.jpg" },
];

const CategoryPage = ({ category }) => {
  const dispatch = useDispatch();
  const filtered = allProducts.filter((p) => p.category === category);
  

  return (
    <div className="category-page">
      <h2>{category.toUpperCase()}</h2>
      <div className="product-grid">
        {filtered.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
