import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "./../context/CartContext";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

function ProductDetails() {
  const param = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [index, setindex] = useState(0);

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
            <img
              src={product.images && product.images[index]}
              alt=""
              className="main-image"
            />
            <div className="small-images">
              {product.images?.map((image, i) => (
                <img
                  onMouseEnter={() => setindex(i)}
                  src={image}
                  alt=""
                  className="small-image"
                />
              ))}
            </div>
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
