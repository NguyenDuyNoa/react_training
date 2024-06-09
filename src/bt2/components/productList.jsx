import React from 'react'
import Product from './product'

function ProductList() {
    return (
        <div className='flex flex-col items-center m-6 '>
            <div className='w-[80%] flex flex-col items-center justify-center'>
                <h2 className='text-3xl font-black'>CÀ PHÊ</h2>
                <h4 className='text-center	'>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</h4>
            </div>
            <div className=' grid grid-cols-4'>
                <Product />
                <Product />
                <Product />
                <Product /> 
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default ProductList