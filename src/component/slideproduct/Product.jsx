import React from 'react'
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
function Product({item}) {
  return (
    <div className='product'>
      <div className="img-product">
<img src={item.images[0]} alt={item.title} /> </div>      
  <p className="name-product">
        {item.title}
        </p>
        <div className="stars">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <TiStarHalfOutline />
        </div>
        <p className='price'><span>{item.price}</span></p>
        <div className="icons">
           <span><IoMdCart /> </span>
           <span><FaShare /></span>
           <span> <FaHeart />  </span>
        </div>
        
    </div>
  )
}

export default Product