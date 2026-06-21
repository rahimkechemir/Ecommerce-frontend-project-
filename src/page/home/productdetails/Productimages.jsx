import React from 'react'

function Productimages({product}) {
  return (
            <div className="imgs-item">
             <div className="big-img">
                <img id="big-img" src={product.images[0]} alt="big-img" />
             </div>
             <div className="small-img">
              {product.images.map((img,index)=>(
                 <img key={index} src={img} alt="" onClick={()=>document.getElementById("big-img").src= img}/>
              ))}
              
             </div>
            </div>
  )
}

export default Productimages
