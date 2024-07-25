import React from 'react'

function Product({item}) {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='flex flex-col justify-center items-center border rounded-lg p-4'>
                <img className='h-56' src={item.imageUrl} alt="" />
                <h2 className='font-black text-lg uppercase hover:text-red-600 cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap w-28 md:w-full md:flex md:justify-center'>{item.name}</h2>
                <h3 className=' text-sm'>Giá : <strong>{item.price} VNĐ</strong></h3>
            </div>
        </div>
    )
}

export default Product