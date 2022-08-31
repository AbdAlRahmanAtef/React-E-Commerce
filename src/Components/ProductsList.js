import Product from "./Product";
import { useEffect } from "react";
import { useState } from "react";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }
  function getCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }
  const getProductsInCat = (catName) => {
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <div className="products">
        <div className="container">
          <h2>Our Products</h2>
          <div className="filters">
            <button className="filter" onClick={() => getProducts()}>
              All
            </button>
            {categories.map((cat) => {
              return (
                <button
                  key={cat}
                  onClick={() => {
                    getProductsInCat(cat);
                  }}
                  className="filter"
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className="card-container">
            {products.map((product) => {
              return (
                <Product
                  key={product.id.toString()}
                  product={product}
                  showBtn={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductList;
