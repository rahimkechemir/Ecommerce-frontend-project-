import React, { useContext } from 'react'
import { Cartcontext } from '../../../component/context/Cartcontext'
import { FaTrash } from "react-icons/fa6";
import './cart.css'
import Pagetransition from '../../../component/Pagetransition';
function Cart() {

  const { cartitems, increasequantity, decreasequantity, removecart } = useContext(Cartcontext)
  const total = cartitems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <Pagetransition>
      <div className='checkout'>
        <div className="ordersummary">
          <h1>order summary</h1>

          <div className="items">
            {cartitems.length === 0 ? (
              <p>no items in cart</p>
            ) : (
              cartitems.map((item, index) => (
                <div className="item-cart" key={index}>
                  <div className="img-name">
                    <img src={item.thumbnail} alt="" />
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className='price'>${item.price}</p>
                      <div className="quantity-control">
                        <button onClick={() => decreasequantity(item.id)}>-</button>
                        <span className='quantity'>{item.quantity}</span>
                        <button onClick={() => increasequantity(item.id)}>+</button>

                      </div>




                    </div>
                  </div>
                  <button className='delete-item' onClick={() => removecart(item.id)}> <FaTrash /></button>


                </div>

              ))
            )}


          </div>
          <div className="bottom-summary">
            <div className="shop-table">
              <p>total:</p>
              <span className='total-checkout'>${total.toFixed(2)}</span>
            </div>
            <div className="btn-div">
              <button type='submit'>place order</button>
            </div>
          </div>


        </div>

      </div>
    </Pagetransition>
  )
}

export default Cart
