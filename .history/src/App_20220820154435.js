import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [colorsOther, setColorsOther] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              sizePrice={sizePrice}
              colorsOther={colorsOther}
              tabIndex={tabIndex}
              setSizePrice={setSizePrice}
              setColorsOther={setColorsOther}
              setTabIndex={setTabIndex}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              sizePrice={sizePrice}
              colorsOther={colorsOther}
              tabIndex={tabIndex}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              sizePrice={sizePrice}
              colorsOther={colorsOther}
              tabIndex={tabIndex}
            />
          }
        />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
