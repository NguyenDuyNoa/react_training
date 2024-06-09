import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <h2 className='item'>Home</h2>
        <h2 className='item active'>Shop page</h2>
        <h2 className='item'>Single product</h2>
        <h2 className='item'>Cart</h2>
        <h2 className='item'>Checkout</h2>
        <h2 className='item'>Category</h2>
        <h2 className='item'>Others</h2>
        <h2 className='item'>Contact</h2>
    </div>
  )
}

export default Header