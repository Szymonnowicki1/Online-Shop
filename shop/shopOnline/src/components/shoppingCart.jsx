import React, { useState } from "react";
import "./shoppingCart.css"
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSmile } from "react-icons/fa";


const ShoppingCart = ({itemsCart,deleteFromCart}) => {
    
    let allPrice = 0

    for(let i =0; i < itemsCart.length; i++){
        allPrice = allPrice + itemsCart[i].price
    }


    return(
        
        <div className="shoppingCartContainer">
            <div className="shoppingCartTitle">
            <div>ShoppingCart</div>
            <div className="allPrice">Total price: {allPrice} zl</div>
            </div>
            {itemsCart.length == 0 ? (
                <>
                <div className="noItems">You have to add some products to see your shoppingCart</div>
                <div className="iconSmile"><FaSmile className="smile"/></div>
                </>
            ) : (
                <>
                 <Link to="/shoppingCart/checkout" className="paymentBtn">Go to payment</Link>
            {itemsCart.map((i,id) => (
                <div className="oneElement"  key={id}>
                    
                <div className="imgContainer1"><img src={i.images[0]} alt="" style={{ width: 100  }} className="shoppingCardImg"/></div>

                <div className="rightElement">
                <div className="rightOne">
                <div className="titleShoppingCart">{i.title}</div>
                <div className="priceCart">{i.price} zl</div>
                </div>
                <div>
                <FaTrash  className="deleteBtn" onClick={()=> deleteFromCart(id)}/>
                </div>
                </div>
                </div>
            ))}</>
                
            )}
           
        </div>
    )
}

export default ShoppingCart