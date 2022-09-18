import "./styles/index.scss";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductsList";
import Slider from "./Components/Slider";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <ProductList />
                </>
              }
            />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
