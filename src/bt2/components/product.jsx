import React from 'react'

function Product() {
    return (
        <div className='flex flex-col items-center m-6 '>
            <div className='flex flex-col justify-center items-center border rounded-lg p-4'>
                <img className='h-56' src="https://www.highlandscoffee.com.vn/vnt_upload/product/06_2023/HLC_New_logo_5.1_Products__PHINDI_KEM_SUA.jpg" alt="" />
                <h2 className='font-black text-lg'>PHINDI KEM SỮA</h2>
                <h3 className=' text-sm'>Giá : <strong>45,000 VNĐ</strong></h3>
            </div>
        </div>
    )
}

export default Product