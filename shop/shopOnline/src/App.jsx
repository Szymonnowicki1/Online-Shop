import { useState, createContext, useContext, useEffect } from 'react';
import { GenderContext } from './context/GenderContext';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Cart from './components/cart'
import ProductDetails from './components/productDetails';
import ShoppingCart from './components/shoppingCart';
import Checkout from './components/checkout';
function App() {

  const [chooseGnder,setChooseGender] = useState("Man")
  const [itemsCart,setItemsCart] =useState(()=> {
    const savedItem = localStorage.getItem("cart")

    if(savedItem){
      return JSON.parse(savedItem)
    }

    return []
  })


  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(itemsCart))
  },[itemsCart])

    const addToCart = (product) => {
      setItemsCart([...itemsCart, product])
    }
    console.log(itemsCart)

    const deleteFromCart = (item) => {
      const newElement = itemsCart.filter((_,index) => index !== item)
      setItemsCart(newElement)
    }


  return(
    <BrowserRouter>

    <GenderContext.Provider value={{chooseGnder,setChooseGender}}>
    <Navbar itemsCart={itemsCart}/>
    <Routes>
      <Route path="/" element={<Cart/>}></Route>
      <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}/>}></Route>
      <Route path="/shoppingCart" element={<ShoppingCart itemsCart={itemsCart} deleteFromCart={deleteFromCart}/>}></Route>
      <Route path="/shoppingCart/checkout" element={<Checkout itemsCart={itemsCart} setItemsCart={setItemsCart}/>}></Route>
    </Routes>
    </GenderContext.Provider>

    </BrowserRouter>
  )
}

export default App
