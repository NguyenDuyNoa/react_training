import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../components/Products'

function Home() {
  const productOfficeList = [
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935330106134-mau1.jpg',
      name: 'Ly Sứ Có Nắp - TP94 - Lucky Dog - Màu Xanh Dương',
      newPrice: 165300,
      oldPrice: 174000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936215850838.jpg',
      name: 'Bình Nước Học Sinh 500 ml - Frozen Elsa - Think Magic. Be Magic - HooHooHaHa GDH01-2606',
      newPrice: 66500,
      oldPrice: 95000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497747146.jpg',
      name: 'Bình Nước Học Sinh Spiderman 510 ml - Arachnid Grid - Stor 74714',
      newPrice: 99750,
      oldPrice: 30000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111457716-qt.jpg',
      name: 'Bình Nước Học Sinh Disney Mickey And Friends 780 ml - Chuột Minnie - Zhongshan HM3416N',
      newPrice: 422750,
      oldPrice: 30000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497515967.jpg',
      name: 'Bình Nước Học Sinh Disney Cars 480 ml - Stor 51596',
      newPrice: 185250,
      oldPrice: 30000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935225306946-mau3.jpg',
      name: 'Ly Sứ Có Nắp Kèm Thìa - TP84 - Mẫu 3',
      newPrice: 146300,
      oldPrice: 30000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111457716-qt.jpg',
      name: 'Bình Nước Học Sinh Disney Mickey And Friends 780 ml - Chuột Minnie - Zhongshan HM3416N',
      newPrice: 422750,
      oldPrice: 30000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497515967.jpg',
      name: 'Bình Nước Học Sinh Disney Cars 480 ml - Stor 51596',
      newPrice: 185250,
      oldPrice: 30000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935225306946-mau3.jpg',
      name: 'Ly Sứ Có Nắp Kèm Thìa - TP84 - Mẫu 3',
      newPrice: 146300,
      oldPrice: 30000
    },
    {
      url: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936215850838.jpg',
      name: 'Bình Nước Học Sinh 500 ml - Frozen Elsa - Think Magic. Be Magic - HooHooHaHa GDH01-2606',
      newPrice: 66500,
      oldPrice: 95000
    },
  ]

  return (
    <div className='w-full mx-auto'>
      <img className="w-[85%] my-6 mx-auto " src="https://bookbuy.vn/Res/Images/Album/4dd7e4ad-370b-4734-a1e4-fe777b6499f5.jpg?w=880&scale=both&h=320&mode=crop" alt="" />
      <div className='flex w-[85%] mx-auto justify-between mb-6'>
        <img className='w-[32%]' src="https://bookbuy.vn/Res/Images/Banner/8fe2a26f-154b-47dc-8acd-b3a88d137ee5.jpg?width=500&format=jpg&scale=both&quality=90" alt="" />
        <img className='w-[32%]' src="https://bookbuy.vn/Res/Images/Banner/5c1b329d-88d0-48f9-9c94-a805ca4be7a7.jpg?width=500&format=jpg&scale=both&quality=90" alt="" />
        <img className='w-[32%]' src="https://bookbuy.vn/Res/Images/Banner/5faa3d54-f64d-45d0-baf4-5156f94fe9e8.jpg?width=500&format=jpg&scale=both&quality=90" alt="" />
      </div>

      <div className='bg-[#ff6c6b] mb-6 flex flex-col'>
        <div className='w-[85%] mx-auto'>
          <div className='bg-white px-5 py-3 rounded-md my-5 flex justify-between'>
            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q=" alt="" />
            <h3>Xem tất cả </h3>
          </div>
          <div className='flex justify-between gap-2 mb-6'>
            <div className='w-1/4 bg-white p-3 rounded-md'>
              <img className='max-h-[190px]' src="https://cdn0.fahasa.com/media/catalog/product/z/3/z3753547372281_0bec86944551ff0febe63604cb910be0.jpg" alt="" />
              <h2>Cuộc Sống Học Đường - Tập 3 - Tặng Kèm ID Card</h2>
              <h2 className=' text-red-700 font-bold'>25.000 đ</h2>
              <del>30.000 đ</del>
            </div>
            <div className='w-1/4 bg-white p-3 rounded-md'>
              <img className='max-h-[190px]' src="https://cdn0.fahasa.com/media/catalog/product/p/i/pizza-nh_-l_m-ngon-nh_-nh_-h_ng_nh-b_a-1.jpg" alt="" />
              <h2>Pizza Nhà Làm Ngon Như Nhà Hàng</h2>
              <h2 className=' text-red-700 font-bold'>25.000 đ</h2>
              <del>30.000 đ</del>
            </div>
            <div className='w-1/4 bg-white p-3 rounded-md'>
              <img className='max-h-[190px]' src="https://cdn0.fahasa.com/media/catalog/product/b/i/bia-ptb-kangdaniel-1.jpg" alt="" />
              <h2>Kang Daniel - A Winner Never Stops Trying - Tặng Kèm 1 Photostrip + 2 Postcard + 1 Poster</h2>
              <h2 className=' text-red-700 font-bold'>25.000 đ</h2>
              <del>30.000 đ</del>
            </div>
            <div className='w-1/4 bg-white p-3 rounded-md'>
              <img className='max-h-[190px]' src="https://cdn0.fahasa.com/media/catalog/product/9/7/9786043443660.jpg" alt="" />
              <h2>Hành Trình Kịch Bản Triệu View - Kiến Tạo Thương Hiệu Bạc Tỷ Từ Kịch Bản Triệu View</h2>
              <h2 className=' text-red-700 font-bold'>25.000 đ</h2>
              <del>30.000 đ</del>
            </div>
            <div className='w-1/4 bg-white p-3 rounded-md'>
              <img className='max-h-[190px]' src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_171972.jpg" alt="" />
              <h2>Bên Bờ Sinh Tử - Gieo Nhân Lành Để Nhận Quả Lành</h2>
              <h2 className=' text-red-700 font-bold'>25.000 đ</h2>
              <del>30.000 đ</del>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-[85%] mx-auto justify-between gap-3'>
        <div className='w-1/4 bg-white p-3 rounded-md'>
          <h1 className=' font-bold'>Thiếu nhi</h1>
          <img className='my-2' src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/cate_homepage_thieunhi.jpg" alt="" />
          <div className='flex w-1/3'>
            <img src="https://cdn0.fahasa.com/media/catalog/product/c/0/c04882e9c24e28adc2aba6b312bcc98b.jpg" alt="" />
            <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_227753.jpg" alt="" />
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/8935244874389.jpg" alt="" />
          </div>
        </div>
        <div className='w-1/4 bg-white p-3 rounded-md'>
          <h1 className=' font-bold'>Manga - Commic</h1>
          <img className='my-2' src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/cate_homepage_manga.jpg" alt="" />
          <div className='flex w-1/3'>
            <img src="https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece_ban-bia-gap_tap-102.jpg" alt="" />
            <img src="https://cdn0.fahasa.com/media/catalog/product/c/o/conan_bia_tap-102.jpg" alt="" />
            <img src="https://cdn0.fahasa.com/media/catalog/product/t/u/tuyen-tap-truyen-ngan-koyoharu-gotouge_tb-2024.jpg" alt="" />
          </div>
        </div>
        <div className='w-1/4 bg-white p-3 rounded-md'>
          <h1 className=' font-bold'>Ngoại văn</h1>
          <img className='my-2' src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/cate_homepage_ngoaivan.jpg" alt="" />
          <div className='flex w-1/3'>
            <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_39171.jpg" alt="" />
            <img src="https://cdn0.fahasa.com/media/catalog/product/9/7/9780593189641.jpg" alt="" />
            <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_39154.jpg" alt="" />
          </div>
        </div>
        <div className='w-1/4 bg-white p-3 rounded-md'>
          <h1 className=' font-bold'>Đồ chơi</h1>
          <img className='my-2' src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/cate_homepage_dochoi.jpg" alt="" />
          <div className='flex w-1/3'>
            <img src="https://cdn0.fahasa.com/media/catalog/product/6/9/6920240426054.jpg" alt="" />
            <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935337513737_1.jpg" alt="" />
            <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935337513157-_5_.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className='w-[85%] mx-auto bg-white rounded-md mt-6'>
        <div className='flex items-center ml-2'>
          <img className='w-5 h-5' src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SachThieuNhi_120x120.png" alt='' />
          <h2 className='font-bold p-2'>Văn phòng phẩm nổi bật</h2>
        </div>
        <hr />
        <div className='grid grid-cols-5 gap-2'>
          {productOfficeList.map((item, index) => (
            <Products key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home