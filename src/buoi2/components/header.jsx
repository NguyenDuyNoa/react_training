import React from 'react'

function Header() {
  return (
    <div className='flex justify-center items-center h-[60px] bg-slate-100'>
        <h2 className='uppercase p-[10px]'>Home</h2>
        <h2 className='uppercase p-[10px] bg-teal-700 text-white'>Shop page</h2>
        <h2 className='uppercase p-[10px]'>Single product</h2>
        <h2 className='uppercase p-[10px]'>Cart</h2>
        <h2 className='uppercase p-[10px]'>Checkout</h2>
        <h2 className='uppercase p-[10px]'>Category</h2>
        <h2 className='uppercase p-[10px]'>Others</h2>
        <h2 className='uppercase p-[10px]'>Contact</h2>
    </div>
  )
}

export default Header