import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import data from "./data";

function App() {
  const [filter, setFilter] = useState(data);
  const [tabIndex, setTabIndex] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [colorsOther, setColorsOther] = useState(0);
  const [activeUser, setActiveUser] = useState(false);

  return (
    <div className="App">
      <Navbar activeUser={activeUser} />
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
        <Route
          path="/products"
          element={<Products filter={filter} setFilter={setFilter} />}
        />
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
              filter={filter}
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
    </div>
  );
}

export default App;
