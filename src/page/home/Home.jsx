import React, { useEffect, useState } from 'react'
import Slideproduct from '../../component/slideproduct/Slideproduct'
import HeroSlider from '../../component/header/HeroSlider'
import './home.css'
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
      const productData = {}

      // go through categories ONE AT A TIME instead of all at once
      for (const category of categories) {
        try {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`)
          if (!res.ok) {
            console.error(`Failed to fetch ${category}: ${res.status}`)
            productData[category] = [] // safe fallback so it never crashes
            continue
          }
          const data = await res.json()
          productData[category] = data.products ?? []
        } catch (error) {
          console.error("error fetching", category, error)
          productData[category] = []
        }
      }

      setProducts(productData)
      setloading(false)
    }
    fetchProducts()
  }, [])

  return (
    <Pagetransition>
      <div>
        <HeroSlider />

        {loading ? (
          <Slideproductloading />
        ) : (
          categories.map((category) =>
            <Slideproduct key={category} data={products[category]} title={category.replace("-", " ")} />
          )
        )}
      </div>
    </Pagetransition>
  )
}

export default Home