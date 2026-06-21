import React, { useContext } from 'react'
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";

import { Cartcontext } from '../context/Cartcontext';
import toast from 'react-hot-toast';

function Product({item}) {
  const navigate = useNavigate()
  const handleaddtofavorites=()=>{
    if(isinfavorites){
    removefavorites(item.id)
    toast.error(`${item.title} removed from favorites`)
    }else{
    addtofavorites(item)
    toast.success(
       
      <div className="toast-wrapper">
        <img src={item.thumbnail} className='toast-img'/>
        <div className="toast-content">
        <strong>{item.title}</strong>
        added to favorites
        <div>
          <button className='btn' onClick={()=> navigate('/favorites')}>view favorites</button>
        </div>
      </div>
       </div> 
      ,{duration :3000}
    )}
  }

  const handleaddtocart=()=>{
    addtocart(item)
    toast.success(
      <div className="toast-wrapper">
        <img src={item.thumbnail} className='toast-img'/>
        <div className="toast-content">
        <strong>{item.title}</strong>
        added to cart 
        <div>
          <button className='btn' onClick={()=> navigate('/cart')}>view cart</button>
        </div>
      </div>
       </div> 
      ,{duration :3000}
    )
  }
  const {cartitems,addtocart,addtofavorites,favorites,removefavorites}=useContext(Cartcontext)
  const isincart = cartitems.some(i=>i.id === item.id)
  const isinfavorites = favorites.some(i=>i.id === item.id)
  return (
    
    <div className={`product ${isincart ? 'in-cart' : ''}`}>
      <Link to={`/product/${item.id}`}>
      <span className='cart-status'>
        <span><FaCheck />in cart </span>
        
      </span>
      <div className="img-product">
      <img src={item.images[0]} alt={item.title} /> 
      </div>     
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
        </Link>
        <div className="icons">
           <span className='btn-cart' onClick={()=>handleaddtocart()}><IoMdCart /> </span>
           <span><FaShare /></span>
           <span className={`${isinfavorites  ? "infavorites" : ""}`} onClick={handleaddtofavorites}> <FaHeart />  </span>
        </div>
        
    </div>
  )
}

export default Product