import { useLayoutEffect } from "react";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Success from "./components/Success";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [colorsOther, setColorsOther] = useState(0);
  const [activeUser, setActiveUser] = useState(false);

  return (
    <div className="App">
      <Navbar activeUser={activeUser} />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login activeUser={activeUser} setActiveUser={setActiveUser} />
            }
          />
          <Route
            path="/logout"
            element={
              <Logout activeUser={activeUser} setActiveUser={setActiveUser} />
            }
          />
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
                activeUser={activeUser}
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
          <Route path="/success" element={<Success />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
