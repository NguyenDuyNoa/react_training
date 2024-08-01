import React, { useEffect, useState } from "react";
import Product from "./product";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";

function ProductList() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setList(productList);
  }, []);

  const productList = [
    {
      id: 1,
      imageUrl:
        "https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/HLC_New_logo_5.1_Products__PHINDI_KEM_SUA.jpg",
      name: "Phidi kem sữa",
      price: "45000",
    },
    {
      id: 2,
      imageUrl:
        "https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/New_product/thumbs/270_crop_HLC_New_logo_5.1_Products__BAC_XIU.jpg",
      name: "Bạc xỉu đá",
      price: "29000",
    },
    {
      id: 3,
      imageUrl:
        "https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/thumbs/270_crop_HLC_New_logo_5.1_Products__PHINDI_CHOCO.jpg",
      name: "Phidi choco",
      price: "45000",
    },
    {
      id: 4,
      imageUrl:
        "https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/thumbs/270_crop_HLC_New_logo_5.1_Products__PHIN_DEN_DA.jpg",
      name: "Phin đen đá",
      price: "29000",
    },
    {
      id: 5,
      imageUrl:
        "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Tac_Da_Vien.jpg",
      name: "Tắc đá viên",
      price: "55000",
    },
    {
      id: 6,
      imageUrl:
        "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Freeze_Cookie___Cream.jpg",
      name: "Cookie & Cream",
      price: "69000",
    },
    {
      id: 7,
      imageUrl:
        "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Chanh_Da_Xay.jpg",
      name: "Chanh đá xay",
      price: "55000",
    },
    {
      id: 8,
      imageUrl:
        "https://www.highlandscoffee.com.vn/vnt_upload/product/HLCPOSTOFFICE_DRAFT/PNG_FINAL/3_MENU_NGUYEN_BAN/thumbs/270_crop_Freeze_Caramel.jpg",
      name: "Caramel phin freeze ",
      price: "69000",
    },
  ];

  const addCart = (index) => {
    dispatch(addToCart(productList[index]));
  };

  return (
    <div className="flex flex-col items-center p-3 md:p-0 my-5">
      <div className="md:w-[80%] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-black">CÀ PHÊ</h2>
        <h4 className="text-center">
          Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được
          trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết
          rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những
          dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.
        </h4>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 pt-3">
        {list.map((item, index) => (
          <Product key={index} item={item} addCart={() => addCart(index)} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
