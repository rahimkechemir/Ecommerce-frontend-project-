import React, { useEffect, useState } from 'react'
import SlideProduct from '../../component/slideproduct/SlideProduct'
import HeroSlider from '../../component/header/HeroSlider'
import './home.css'
import { Await } from 'react-router-dom'
import Slideproductloading from '../../component/slideproduct/Slideproductloading'
import Pagetransition from '../../component/Pagetransition'
const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
]
function Home() {
  const [products, setProducts] = useState({})

  const [loading, setloading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await res.json()
            return { [category]: data.products }
          })
        )
        const productData = Object.assign({}, ...results)
        setProducts(productData)
      } catch (error) {
        console.error("error fetching", error)
      } finally {
        setloading(false)
      }

    }
    fetchProducts()
  }, [])
  console.log(products)
  return (
    <Pagetransition>
      <div>
        <HeroSlider />

        {loading ? (
          <Slideproductloading />
        ) : (

          categories.map((category) =>
            <SlideProduct key={category} data={products[category]} title={category.replace("-", " ")} />
          )

        )}


      </div>
    </Pagetransition>
  )
}

export default Home

