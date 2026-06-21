import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../component/slideproduct/Product'
import './categorypage.css'
import Pagetransition from '../../component/Pagetransition'
function Categorypage() {
  const { category } = useParams()
  const [categoryproducts, setcategoryproducts] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setcategoryproducts(data.products)
      })
  }, [category])
  return (
    <Pagetransition>
      <div className='category-products' >
        <div className="container">
          <div className="top-slide">
            <h2>{category}</h2>
            <p>See our top products</p>
          </div>
          <div className="products">
            {categoryproducts.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Pagetransition>
  )
}

export default Categorypage
