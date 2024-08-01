import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cart } = useSelector((store) => store.cart);
  const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div className="h-20 bg-[#b22830] flex justify-between items-center text-white">
      <div className="ml-10">
        <MenuIcon fontSize="large" />
      </div>
      <Link className=" uppercase text-3xl font-black" to={"/bt5"}>
        Highlands
      </Link>
      <div className=" mr-10 flex gap-4">
        <Link to={"/bt5/cart"} className="relative">
          <ShoppingBagIcon />
          <div className=" absolute flex justify-center items-center w-5 h-5 -top-[30%] -right-[30%] bg-white text-red-700 rounded-full border-red-700 rounded">
            {totalQuantity ?? 0}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
