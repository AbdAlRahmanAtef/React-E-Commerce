import React, { useContext } from "react";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <>
      <Link to={`product/${product.id}`} className="card">
        <div className="image">
          <img src={product.images[1]} alt={product.title} />
        </div>
        <h3>
          {product.title.length > 30
            ? product.title.slice(0, 21)
            : product.title}
        </h3>
        <span className="price">${product.price}</span>
      </Link>
    </>
  );
}
export default Product;
