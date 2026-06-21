import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Pagetransition from '../component/Pagetransition'
import Product from '../component/slideproduct/Product'
import Slideproductloading from "../component/slideproduct/Slideproductloading";

function Searchresults() {
    const [loading, setloading] = useState(true)
    const [results, setresults] = useState([])
    const query = new URLSearchParams(useLocation().search).get("query")

    useEffect(() => {
        const fetchresults = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
                const data = await res.json()
                console.log(data) // debug if you still want it
                setresults(data.products || [])
            } catch (error) {
                console.log(error)
            } finally {
                setloading(false)
            }
        }
        if (query) { fetchresults() }
    }, [query])

    return (
        <Pagetransition key={query}>
            <div className='category-products'>
                {loading ? (
                    <Slideproductloading key={query} />
                ) : results.length > 0 ? (
                    <div className="container">
                        <div className="top-slide">
                            <h2>results for : {query}</h2>
                        </div>
                        <div className="products">
                            {results.map((item, index) => (
                                <Product item={item} key={index} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <h2>no results for : {query}</h2>
                )}
            </div>
        </Pagetransition>
    )
}

export default Searchresults
