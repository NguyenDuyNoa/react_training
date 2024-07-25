import React from 'react'
import { Link } from 'react-router-dom'

function Products({item}) {
    return (
        <Link to="#" className=" bg-[#f97c0038] rounded-md p-2 hover:bg-[#f97c00bb]">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={item.url} alt={item.name} className=" w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
            <h2 className=' text-red-700 font-bold'>{item.newPrice}đ</h2>
            <del>{item.oldPrice}đ</del>
        </Link>
    )
}

export default Products