import React, { useEffect } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../Redux/Slice/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart); 

  useEffect(() => {
    dispatch(fetchCartItems()); 
  }, [dispatch]);

  const totalAmount = cartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(/,/g, ''));
    return total + priceNumber * (item.quantity || 1); 
  }, 0);

  return (
    <div>
      <section className="bg-white py-8 antialiased md:py-10">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Shopping Cart
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <CartItem key={item.id} item={item} /> 
                  ))
                )}
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        {new Intl.NumberFormat('vi-VN').format(totalAmount)} VNĐ
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900">
                      {new Intl.NumberFormat('vi-VN').format(totalAmount)} VNĐ
                    </dd>
                  </dl>
                </div>
                <Link
                  to="#"
                  className="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-700"
                >
                  Proceed to Checkout
                </Link>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    to={'/bt5'}
                    className="inline-flex items-center gap-2 text-sm font-medium text-red-700 underline hover:no-underline"
                  >
                    Continue Shopping
                    <ArrowForwardIcon fontSize="small" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Do you have a voucher or gift card?
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-700 focus:ring-red-700"
                      placeholder
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-700"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
