import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mt-6 mb-2 uppercase font-bold text-xl'>
        Chào mừng bạn đến với repo react_training
      </h2>
      <div>
        <p className='flex justify-center'>
          <img width="10%" align="center" alt="PIC" height="100%" src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" />
        </p>
        <p >
          <a href="https://github.com/NguyenDuyNoa">
            <img className='flex justify-center pl-16' src="https://readme-typing-svg.herokuapp.com?lines=Repo+này+của+Nguyễn+Duy+Noa;Bấm+vô+đi+có+điều+bất+ngờ" alt='' />
          </a>
        </p>
      </div>


      <div className='grid grid-cols-4 gap-4'>
        <Link to='/bt1' className=' bg-teal-600 rounded-xl p-3'>
          <h2 className='font-bold text-white'>Bài tập 1</h2>
          <img className=' w-60 rounded-md my-2' src="https://cdn.tgdd.vn/Files/2023/08/06/1541395/smartphone-tgdd-33312313-2-060823-210136-800-resize.jpg" alt="" />
          <h2 className='font-bold text-white'>Shop bán điện thoại</h2>
          <h2 className='text-white'>Làm quen components</h2>
        </Link>

        <Link to='/bt2' className=' bg-[#B22830] rounded-xl p-3'>
          <h2 className='font-bold text-white'>Bài tập 2</h2>
          <img className=' w-60 rounded-md my-2' src="https://aeonmall-review-rikkei.cdn.vccloud.vn/test/public/wp/15/editors/v2fNKbijxVk5L3olsHnKeKJdLi9Hs1pPdffTBGkC.jpg" alt="" />
          <h2 className='font-bold text-white'>Landing page Highlands </h2>
          <h2 className='text-white'>Component, map data</h2>
        </Link>

        <Link to='/bt3' className=' bg-gray-400 rounded-xl p-3'>
          <h2 className='font-bold text-white'>Bài tập 3</h2>
          <img className=' w-60 rounded-md my-2' src="https://1office.vn/wp-content/uploads/2023/06/loi-ich-su-dung-to-do-list.jpg" alt="" />
          <h2 className='font-bold text-white'>Todo list</h2>
          <h2 className='text-white'>Sử dụng State</h2>
        </Link>

        <Link to='/bt4' className=' bg-[#F97D00] rounded-xl p-3'>
          <h2 className='font-bold text-white'>Bài tập 4</h2>
          <img className=' w-60 rounded-md my-2' src="https://blog.dktcdn.net/files/kinhd-doanh-sach-bao.jpg" alt="" />
          <h2 className='font-bold text-white'>Shop bán sách</h2>
          <h2 className='text-white'>Sử dụng react-router-dom</h2>
        </Link>
      </div>
    </div >
  )
}

export default HomePage
