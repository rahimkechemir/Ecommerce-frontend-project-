import React, { useContext } from 'react'
import { FaShare } from 'react-icons/fa'
import { GoStarFill } from 'react-icons/go'
import { IoMdCart, IoMdHeart } from 'react-icons/io'
import { TiStarHalfOutline } from 'react-icons/ti'
import { Cartcontext } from '../../../component/context/Cartcontext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Productinfo({ product }) {
    const { cartitems, addtocart, addtofavorites, favorites, removefavorites } = useContext(Cartcontext)
    const isincart = cartitems?.some(i => i.id === product.id) ?? false
    const navigate = useNavigate()
    const handleaddtofavorites = () => {
    if (isinfavorites) {
        removefavorites(product.id)
        toast.error(`${product.title} removed from favorites`)
    } else {
        addtofavorites(product)
        toast.success(
            <div className="toast-wrapper">
                <img src={product.thumbnail} className='toast-img' />
                <div className="toast-content">
                    <strong>{product.title}</strong>
                    added to favorites
                    <div>
                        <button className='btn' onClick={() => navigate('/favorites')}>view favorites</button>
                    </div>
                </div>
            </div>
            , { duration: 3000 }
        )
    }
}
    const isinfavorites = favorites.some(i=>i.id === product.id)
    const handleaddtocart = () => {
        if (isincart) {
            toast.error(`${product.title} is already in your cart`)
            return
        }
        addtocart(product)
        toast.success(
            <div className="toast-wrapper">
                <img src={product.thumbnail} className='toast-img' />
                <div className="toast-content">
                    <strong>{product.title}</strong>
                    added to cart
                    <div>
                        <button className='btn' onClick={() => navigate('/cart')}>view cart</button>
                    </div>
                </div>
            </div>
            , { duration: 3000 }
        )
    }

    return (
        <div className="details-item">
            <h1 className='name'>{product.title}</h1>

            <div className="stars">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <TiStarHalfOutline />
            </div>

            <p className='price'>$ {product.price}</p>
            <h4 className='Availability'>Availability : <span>{product.availabilityStatus}</span></h4>
            <h4 className='Brand'>Brand : <span>{product.brand}</span></h4>
            <p className='desc'>{product.description}</p>
            <h4 className='Stock'><span>HURRY UP {product.stock} IN STOCK</span></h4>

            <button
                className={`btn ${isincart ? 'in-cart' : ''}`}
                onClick={handleaddtocart}
            >
                {isincart ? 'item in cart' : 'add to cart'} <IoMdCart />
            </button>

            <div className="icons">
                <span><FaShare /></span>
                <span className={`${isinfavorites  ? "infavorites" : ""}`} onClick={handleaddtofavorites}><IoMdHeart   /></span>
            </div>
        </div>
    )
}

export default Productinfo