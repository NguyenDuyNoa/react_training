import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Products from '../components/Products'
import axios from 'axios'

function Product() {
  let [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://deploy-react-training.vercel.app/productList').then(res => setList(res.data))
  }, [])


  return (
    <div className="md:w-[85%] mx-auto w-full">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-6">
        <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-4">
          {list.map((item, index) => (
            <Products key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product