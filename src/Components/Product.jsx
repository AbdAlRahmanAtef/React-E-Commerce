import React from "react";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <>
      <Link to={`product/${product.id}`} className="card">
        <div className="image">
          <img
            src={product.images[1]}
            alt="https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940"
          />
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
