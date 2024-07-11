import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const activeClass = "block py-2 pr-4 pl-3 text-[#F97D00] rounded bg-blue-700 lg:bg-transparent lg:p-0 "
    const unActiveClass = "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F97D00] lg:p-0 "
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="#" className="flex items-center">
                        <img src="https://bookbuy.vn/Images/frontend/base/logo-new.png" className="mr-3 ml-2 h-6 sm:h-9" alt="Flowbite Logo" />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to="/bt4/login" className="text-gray-800  hover:bg-gray-50 ring-1 ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 0 focus:outline-none ">Log in</Link>
                        <Link to="/bt4/register" className="text-white bg-[#F97D00] hover:bg-[#f97c00bb] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none">Register</Link>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/bt4/home">
                                    {({ isActive }) => (
                                        <span className={isActive ? activeClass : unActiveClass}>Home</span>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/bt4/product">
                                    {({ isActive }) => (
                                        <span className={isActive ? activeClass : unActiveClass}>Product</span>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/bt4/about">
                                    {({ isActive }) => (
                                        <span className={isActive ? activeClass : unActiveClass}>About</span>
                                    )}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header