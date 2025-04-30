import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../assets/2.png'
import NavbarButton from '../buttons/navbarButton'
const Navbar = () => {

  return (
    <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
       
        <span className="self-center text-2xl font-mono whitespace-nowrap">PIZZERIA</span>
    </Link>
    <div className="flex md:order-2 space-x-3 md:space-x-1 rtl:space-x-reverse">
    <input type="text" id="search-navbar" className="p-2 ps-10 text-sm text-gray-900 border border-black-300 rounded-lg bg-gray-50 " placeholder="Search..." />
        <NavbarButton/>
    </div>
    <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
        <li>
          <Link to="/" className="block py-2 px-3 text-black rounded-sm md:hover:bg-transparent md:hover:text-red-400 md:p-0">Home</Link>
        </li>
        <li>
          <a href="#How_it_works" className="block py-2 px-3 text-black rounded-sm md:hover:bg-transparent md:hover:text-red-400 md:p-0">How it works</a>
        </li>
        <li>
          <Link to="/products" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0">Product</Link>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0">Contact Us</a>
        </li>
        <li>
        
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar
