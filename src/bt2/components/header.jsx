import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='h-20 bg-[#b22830] flex justify-between items-center text-white'>
            <div className='ml-2'>
                <MenuIcon fontSize='large'/>
            </div>
            <h2 className=' uppercase text-3xl font-black'>
                Highlands
            </h2>
            <div className=' mr-2 flex gap-2'>
                <PersonIcon />
                <ShoppingBagIcon />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header