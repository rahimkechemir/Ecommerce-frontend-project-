import React ,{ useEffect, useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineLogin } from "react-icons/md";
import {useLocation } from 'react-router-dom';
import { HiOutlineUserAdd } from "react-icons/hi";
import "./header.css"

function BtmHeader() {
  const location=useLocation();
  const[isCategoryOpen,setIsCategoryOpen]=useState(false);
const [categories, setCategories] = useState([]);
  useEffect(() => {
  fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(err => console.error(err));
}, []);
   console.log(categories);
  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">
        <div className="category-nav">
          <div className="category-btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            <IoIosMenu className='menu-icon' />
            <p>browse categories</p>
            <FaAngleDown />
          </div>
          <div className={`category-nav-list ${isCategoryOpen ? "active" : ""}`}>
           {categories.map((category) => 
          <Link to={category.slug}>{category.name}</Link>)} 
          </div>
    
        </div>
        <div className="nav-links">
          
          <Link className={location.pathname === '/' ? 'active' : ''} to="/">
            Home
          </Link>
          <Link className={location.pathname === '/products' ? 'active' : ''} to="/products">
            Products
          </Link>
          <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">
            About
          </Link>
          <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">
            Contact
          </Link>
          <Link className={location.pathname === '/accessories' ? 'active' : ''} to="/accessories">
            Accessories
          </Link>
          <Link className={location.pathname === '/blog' ? 'active' : ''} to="/blog">
            Blog
          </Link>
        </div> 
          <div className="register-icon">
            <Link to ='/'><HiOutlineUserAdd /> register</Link>
           
            <Link to ='/'><MdOutlineLogin /> sign in</Link>
            </div>

        </nav>
      </div>
    </div>
  )
}

export default BtmHeader
