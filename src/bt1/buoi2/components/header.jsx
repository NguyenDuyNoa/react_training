import React from 'react'

function Header() {
  return (
    <div className='flex justify-center items-center md:h-[60px] bg-slate-100 '>
        <h2 className='uppercase p-1 md:px-3 flex justify-center items-center text-center text-[10px] md:h-[60px] md:text-base'>Home</h2>
        <h2 className='uppercase p-1 md:px-3 flex justify-center items-center text-center text-[10px] md:h-[60px] md:text-base bg-teal-700 text-white'>Shop page</h2>
        <h2 className='uppercase p-1 md:px-3 flex justify-center items-center text-center text-[10px] md:h-[60px] md:text-base'>Single product</h2>
        <h2 className='uppercase p-1 md:px-3 flex justify-center items-center text-center text-[10px] md:h-[60px] md:text-base'>Cart</h2>
        <h2 className='uppercase p-1 md:px-3 flex justify-center items-center text-center text-[10px] md:h-[60px] md:text-base'>Checkout</h2>
        <h2 className='uppercase p-1 md:px-3 flex justify-center items-center text-center text-[10px] md:h-[60px] md:text-base'>Category</h2>
        <h2 className='uppercase p-1 md:px-3 flex justify-center items-center text-center text-[10px] md:h-[60px] md:text-base'>Others</h2>
        <h2 className='uppercase p-1 md:px-3 flex justify-center items-center text-center text-[10px] md:h-[60px] md:text-base'>Contact</h2>
    </div>
  )
}

export default Header