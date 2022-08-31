import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const param = useParams()
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.productId}`)
      .then((res) => res.json())
      .then((pro) => setProduct(pro));
    }, [param.productId]);
    console.log(product)
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="info">
            <h3>{product.title}</h3>
            <p className="dis">{product.description}</p>
            <p className="price">Price: <span>${product.price}</span></p>
            <button className="cart btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
