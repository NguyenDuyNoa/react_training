import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cart } = useSelector((store) => store.cart);
  const totalQuantity = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <div className="h-20 bg-[#b22830] flex justify-between items-center text-white">
      <div className="flex flex-1 items-center ml-10">
        <MenuIcon fontSize="large" />
      </div>
      <div className="flex flex-1 justify-center">
        <Link className="uppercase text-3xl font-black" to={"/bt5"}>
          Highlands
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end mr-10 gap-4">
        <Link
          to="/bt5/login"
          className="text-white hover:bg-[#e4434b9e] ring-1 ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
        >
          Log in
        </Link>
        <Link
          to="/bt5/register"
          className="text-[#b22830] bg-white hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
        >
          Register
        </Link>
        <Link to="/bt5/cart" className="relative">
          <ShoppingBagIcon />
          <div className="absolute flex justify-center items-center w-5 h-5 -top-[30%] -right-[30%] bg-white text-red-700 rounded-full border-red-700">
            {totalQuantity ?? 0}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
