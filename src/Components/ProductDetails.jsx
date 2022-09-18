import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from './../context/CartContext';
function ProductDetails() {
  const param = useParams();
  const {addToCart} = useContext(CartContext)
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${param.productId}`)
      .then((res) => setProduct(res?.data))
      .catch(Error(Error));
  }, [param.productId]);
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="image">
            <img src={product?.images?.[0]} alt={product.title} />
          </div>
          <div className="info">
            <h3>{product.title}</h3>
            <p className="dis">{product.description}</p>
            <p className="price">
              Price: <span>${product.price}</span>
            </p>
            <Link className="cart btn" onClick={() => addToCart(product, 1)}>
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
