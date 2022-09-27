import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import { CartContext } from "./../context/CartContext";
function Product(props) {
  const { addToCart } = useContext(CartContext);
  const { product, showBtn } = props;
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={product.images[1]} alt={product.title} />
        </div>
        <h3>{product.title.length > 30 ? product.title.slice(0, 21) : product.title}</h3>
        <span className="price"> Price: ${product.price}</span>
        <div className="info">
          {showBtn && (
            <Link to={`/product/${product.id}`} className="info-btn">
              Details <BiRightArrowAlt size={25} />
            </Link>
          )}
          <span className="info-btn" onClick={() => addToCart(product)}>
            <MdAddShoppingCart size={30} />
          </span>
        </div>
      </div>
    </>
  );
}
export default Product;
