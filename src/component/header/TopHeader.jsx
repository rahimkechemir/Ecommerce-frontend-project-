import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'
import { IoMdHeart } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import { IoCart } from "react-icons/io5";



function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/" ><img src={logo} alt="Logo" /></Link>
          <form action="" className="search_box">
          <input type="text" placeholder="Search for products" id="search" name="search" />
          <button type="submit"><GrSearch /></button>
          </form>
          <div className="headericon">
         <div className="icon"><IoCart />
         <span className="count">0</span>
          </div>
          <div className="icon"><IoMdHeart />
         <span className="count">0</span>
         </div>
          </div>
      </div>
    </div>
  )
}

export default TopHeader
