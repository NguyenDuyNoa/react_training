import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import axios from 'axios'

function Product() {
  // const productList = [
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-1_13806_11910.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 1',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-6_13811_11915.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 2',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-4_13810_11914.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 3',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-19_13824_11928.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 4',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-5_13809_11913.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 5',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-13_13818_11922.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 6',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-14_13819_11923.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 7',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-8_13813_11917.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 8',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-8_13813_11917.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 8',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://bookbuy.vn/Res/Images/Product/doraemon-truyen-ngan-tap-8_13813_11917.jpg?w=135&h=180&scale=canvas&Cache=Always',
  //     name: 'Doraemon - Tập 8',
  //     newPrice: 26000,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935330106134-mau1.jpg',
  //     name: 'Ly Sứ Có Nắp - TP94 - Lucky Dog - Màu Xanh Dương',
  //     newPrice: 165300,
  //     oldPrice: 174000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936215850838.jpg',
  //     name: 'Bình Nước Học Sinh 500 ml - Frozen Elsa - Think Magic. Be Magic - HooHooHaHa GDH01-2606',
  //     newPrice: 66500,
  //     oldPrice: 95000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497747146.jpg',
  //     name: 'Bình Nước Học Sinh Spiderman 510 ml - Arachnid Grid - Stor 74714',
  //     newPrice: 99750,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111457716-qt.jpg',
  //     name: 'Bình Nước Học Sinh Disney Mickey And Friends 780 ml - Chuột Minnie - Zhongshan HM3416N',
  //     newPrice: 422750,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497515967.jpg',
  //     name: 'Bình Nước Học Sinh Disney Cars 480 ml - Stor 51596',
  //     newPrice: 185250,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935225306946-mau3.jpg',
  //     name: 'Ly Sứ Có Nắp Kèm Thìa - TP84 - Mẫu 3',
  //     newPrice: 146300,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111457716-qt.jpg',
  //     name: 'Bình Nước Học Sinh Disney Mickey And Friends 780 ml - Chuột Minnie - Zhongshan HM3416N',
  //     newPrice: 422750,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497515967.jpg',
  //     name: 'Bình Nước Học Sinh Disney Cars 480 ml - Stor 51596',
  //     newPrice: 185250,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935225306946-mau3.jpg',
  //     name: 'Ly Sứ Có Nắp Kèm Thìa - TP84 - Mẫu 3',
  //     newPrice: 146300,
  //     oldPrice: 30000
  //   },
  //   {
  //     url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936215850838.jpg',
  //     name: 'Bình Nước Học Sinh 500 ml - Frozen Elsa - Think Magic. Be Magic - HooHooHaHa GDH01-2606',
  //     newPrice: 66500,
  //     oldPrice: 95000
  //   },
  // ];
  let [list, setList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/productList').then(res => setList(res.data))
  }, [])


  return (
    <div className="w-[85%] mx-auto">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-6">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-4">
          {list.map((item, index) => (
            <Products key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product