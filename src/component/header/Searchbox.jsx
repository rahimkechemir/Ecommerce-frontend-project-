import { ul } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Searchbox() {
  const [searchterm,setsearchterm]=useState("")
    const navigate=useNavigate()
    const location = useLocation()
    const [suggestions , setsuggestions]=useState([])
    const handlesubmit = (e)=> {
        e.preventDefault();
        if(searchterm){
            navigate(`/search?query=${encodeURIComponent (searchterm.trim())}`)
            
        }
        setsuggestions([])
    }

    useEffect(()=>{
      
      const fetchSuggestions=async ()=>{
        if(!searchterm.trim()){
          setsuggestions([])
          return;
        }
        try{
          const res= await fetch(`https://dummyjson.com/products/search?q=${searchterm}`)
          const data = await res.json()
          setsuggestions(data.products.slice(0,5) || [])
        }catch(error){
          console.log(error)
          setsuggestions([])
        }finally{

        }
        
      }
      const debounce = setTimeout(()=>{
        fetchSuggestions()
      },300)
      return()=>clearTimeout(debounce)
      
    },[searchterm])

    
    useEffect(()=>{
      setsuggestions([])
    },[location])
    
  return (
    
    <div className="searchbox-container">
        <form onSubmit={handlesubmit} className="search_box">
          <input type="text" placeholder="Search for products" id="search" name="search" 
          onChange={(e)=> setsearchterm(e.target.value)}
          autoComplete='off' />
          <button type="submit"><GrSearch /></button>
        </form>
        {suggestions.length > 0 && (
          <ul className='suggestions'>
            {suggestions.map((item)=>(
              <Link to={`/products/${item.id}`}>
                <li>
                  <img src={item.thumbnail} alt=''/>
                <span>{item.title}</span>
                </li>
              </Link>
                
                

              
            ))}

          </ul>
        )}
    </div>
    
    
  )
}

export default Searchbox
