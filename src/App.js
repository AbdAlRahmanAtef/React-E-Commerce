import Navbar from "./Components/Navbar";
import ProductList from './Components/ProductsList';
import About from "./Components/About";
import "../src/Styles/index.scss"
import Slider from "./Components/Slider";
import { Routes, Route } from "react-router-dom";
import ProductDetails from './Components/ProductDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
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
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
