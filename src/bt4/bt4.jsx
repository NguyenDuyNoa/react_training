import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function BT4() {
  return (
    <div className='bg-[#f8f8f8]'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default BT4