import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
