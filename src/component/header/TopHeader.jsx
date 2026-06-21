import React, { useContext } from 'react'
import "./header.css"
import icon from "../../assets/icon.jpg";
import { Link } from 'react-router-dom'
import { IoMdHeart } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import { IoCart } from "react-icons/io5";
import { Cartcontext } from '../context/Cartcontext';
import Searchbox from './Searchbox';



function TopHeader() {

  const { cartitems , favorites} = useContext(Cartcontext)
  return (


    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/" ><img src={icon} alt="Logo" /></Link>
        <Searchbox/>
        <div className="headericon">
          <Link to='/cart'>
            <div className="icon"><IoCart />
              <span className="count">{cartitems.length}</span>
            </div></Link>
          <Link to="/favorites">
          <div className="icon"><IoMdHeart />
            <span className="count">{favorites.length}</span>
          </div></Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
