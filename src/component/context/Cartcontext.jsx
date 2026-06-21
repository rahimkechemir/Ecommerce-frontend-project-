import React, { createContext, useEffect, useState } from 'react'

export const Cartcontext = createContext()

function CartProvider({ children }) {
  const [favorites,setfavorites]=useState(() => {
    const savedfavorites = localStorage.getItem('favorites')
    return savedfavorites ? JSON.parse(savedfavorites) : []
  })
  const addtofavorites = (item) => {
    setfavorites(previtems => {
      const exists = previtems.find(i => i.id === item.id)
      if (exists) {
        return previtems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...previtems, { ...item, quantity: 1 }]
    })
  }
  
  useEffect(()=>{
    localStorage.setItem("favorites",JSON.stringify(favorites))
  },[favorites])


  const [cartitems, setcartitems] = useState(() => {
    const savedcart = localStorage.getItem('cartitems')
    return savedcart ? JSON.parse(savedcart) : []
  })

  const increasequantity = (id) => {
    setcartitems(previtems => previtems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreasequantity = (id) => {
    setcartitems(previtems => previtems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ))
  }

  const removecart = (id) => {
    setcartitems(previtems => previtems.filter(item => item.id !== id))
  }
  const removefavorites = (id) => {
    setfavorites(previtems => previtems.filter(item => item.id !== id))
  }

  const addtocart = (item) => {
    setcartitems(previtems => {
      const exists = previtems.find(i => i.id === item.id)
      if (exists) {
        return previtems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...previtems, { ...item, quantity: 1 }]
    })
  }

  useEffect(() => {
    localStorage.setItem('cartitems', JSON.stringify(cartitems))
  }, [cartitems])

  return (
    <Cartcontext.Provider value={{ cartitems, addtocart, increasequantity, 
    decreasequantity, removecart ,addtofavorites,favorites,removefavorites}}>
      {children}
    </Cartcontext.Provider>
  )
}

export default CartProvider