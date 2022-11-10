import Product from "./Product";
import { useEffect } from "react";
import { useState } from "react";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);
  const axios = require("axios");
  const URL = "https://api.escuelajs.co/api/v1";
  function getProducts() {
    axios
      .get(`${URL}/products?limit=20&offset=50`)
      .then((res) => {
        setProducts(res?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  console.log(products);
  function getCategories() {
    axios
      .get(`${URL}/categories?limit=5&offset=0`)
      .then((res) => setCats(res?.data))
      .catch(function (error) {
        console.error(error);
      });
  }
  function getProductsInCat(id) {
    axios
      .get(`${URL}/categories/${id}/products`)
      .then((res) => setProducts(res?.data))
      .catch(function (error) {
        console.error(error);
      });
  }
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
            {cats?.map((cat) => {
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    getProductsInCat(cat.id);
                  }}
                  className="filter"
                >
                  {cat.name}
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
