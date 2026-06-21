
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import './productdetails.css'
import Slideproduct from '../../../component/slideproduct/Slideproduct'
import Productdetailsloading from './Productdetailsloading';
import { FaShare } from "react-icons/fa";
import Slideproductloading from '../../../component/slideproduct/Slideproductloading';
import Productimages from './Productimages';
import Productinfo from './Productinfo';
import Pagetransition from '../../../component/Pagetransition';
function ProductDetails() {
    const {id}=useParams()

    const[product,setProduct]=useState(null)
    const[loading,setLoading]=useState(true)
    const[relatedproducts,setRelatedproducts]=useState([])
    const[loadingrelatedproducts,setLoadingrelatedproducts]=useState(true)
    useEffect(()=>{
        const fetchProduct=async ()=>{
            try{
                const res=await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
                setLoading(false)
            }catch(error){
               console.log("fetching error",error);

            }
        }
        fetchProduct()
    },[id])

    useEffect(()=>{
      if(!product) return
      fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res)=> res.json())
      .then((data)=>{
       setRelatedproducts(data.products)
      })
      .catch((error)=>console.error(error))
      .finally(()=>setLoadingrelatedproducts(false))
    },[product?.category])


    if(loading)return<Productdetailsloading />
    if(!product)return<p>product not found...</p>
  return (
    <Pagetransition key={id}>
      <>
   

    
    <div className='itemdetails'>
      <div className="container">
        <Productimages product={product}/>
        <Productinfo  product={product}/>
      </div>
    </div>
      
    {loadingrelatedproducts?(
      <Slideproductloading/>
    ):
  <Slideproduct key= {product.category} title={product.category.replace("-"," ")} data={relatedproducts} />}
  </>
    </Pagetransition>
  )
}

export default ProductDetails


