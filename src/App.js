import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import BT1 from "./bt1/buoi2/bt1";
import BT2 from "./bt2/bt2";
import BT3 from "./bt3/bt3";
import BT4 from "./bt4/bt4";
import Login from "./bt4/pages/login";
import Register from "./bt4/pages/register";
import Home from "./bt4/pages/home";
import HomePage from "./homePage";
import Product from "./bt4/pages/product";
import About from "./bt4/pages/about";
import BT5 from "./bt5";
import Cart from "./bt5/components/cart";
import Login5 from "./bt5/pages/login";
import Register5 from "./bt5/pages/register";
import HomeBT5 from "./bt5/pages/homeBT5";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bt1" element={<BT1 />} />
      <Route path="/bt2" element={<BT2 />} />
      <Route path="/bt3" element={<BT3 />} />

      <Route path="/bt4/*" element={<BT4 />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="/bt5" element={<BT5 />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<HomeBT5 />} />
        <Route path="login" element={<Login5 />} />
        <Route path="register" element={<Register5 />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
