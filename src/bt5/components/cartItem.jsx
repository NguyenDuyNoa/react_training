import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItem, fetchCartItems } from "../Redux/Slice/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const priceNumber = parseFloat(item.price.replace(/,/g, ''));
  
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateCartItem({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleIncrement = () => {
    dispatch(updateCartItem({ id: item.id, quantity: item.quantity + 1 }));
  };

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:pr-10 md:p-3">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link to="#" className="shrink-0 md:order-1">
          <img className="h-28 w-28" src={item.imageUrl} alt={item.name} />
        </Link>
        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              id="decrement-button"
              onClick={handleDecrement}
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
            >
              <RemoveIcon fontSize="small" />
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
              value={item.quantity || 1}
              readOnly
            />
            <button
              type="button"
              id="increment-button"
              onClick={handleIncrement}
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
            >
              <AddIcon fontSize="small" />
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">
              {new Intl.NumberFormat('vi-VN').format(priceNumber)} VNĐ
            </p>
          </div>
        </div>
        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            to="#"
            className="text-base font-medium text-gray-900 hover:underline"
          >
            {item.name}
          </Link>
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleRemove}
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
            >
              <CloseIcon />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
