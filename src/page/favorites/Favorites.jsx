import React, { useContext } from 'react'
import { Cartcontext } from '../../component/context/Cartcontext'
import Pagetransition from '../../component/Pagetransition'
import { h4 } from 'framer-motion/client'
import SlideProduct from '../../component/slideproduct/SlideProduct'
import Product from '../../component/slideproduct/Product'



function Favorites() {
 const {favorites}=useContext(Cartcontext)
  return (
    <div>
      <Pagetransition>
        <div className="categoryproduct favorites">
          <div className="container">
            <div className="top-slide">
              <h2>your favorites</h2>
            </div>
            {favorites.length===0 ? (
              <h4>no favorites</h4>
            ):(
             <div className="products">
              {favorites.map(item=>(
                <Product item={item} key={item.id}/>
              ))}
             </div>
            )}
          </div>
          
        </div>
      </Pagetransition>
    </div>
  )
}

export default Favorites
