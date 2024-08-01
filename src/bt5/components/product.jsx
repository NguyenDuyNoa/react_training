import React from "react";

function Product({ item, addCart }) {
  const priceNumber = parseFloat(item.price.replace(/,/g, ""));

  return (
    <div className="flex flex-col items-center w-full border">
      <div className="flex flex-col justify-center items-center  rounded-lg p-4">
        <img className="h-56" src={item.imageUrl} alt="" />
        <h2 className="font-black text-lg uppercase hover:text-red-600 cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap w-28 md:w-full md:flex md:justify-center">
          {item.name}
        </h2>
        <h3 className=" text-sm">
          Giá :{" "}
          <strong>
            {new Intl.NumberFormat("vi-VN").format(priceNumber)} VNĐ
          </strong>
        </h3>
      </div>
      <button
        onClick={addCart}
        className="bg-red-700 w-[90%] rounded-lg py-2 text-white m-2"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
