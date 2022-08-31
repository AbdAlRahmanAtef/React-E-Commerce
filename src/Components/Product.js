import { Link } from 'react-router-dom';
function Product(props) {
  const { product,showBtn } = props;
  return (
    <>
      <div className="card">
        <h3>{product.title}</h3>
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="info">
          {showBtn && (
            <Link to={`/product/${product.id}`} className="btn info-btn">
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;