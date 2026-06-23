import React, { useState } from "react";
import "./checkout.css"
import { FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = ({itemsCart,setItemsCart}) => {

    const [address,setAddress] = useState("")
    const [submit,setSubmit] = useState("")
    const [show,setShow] = useState(false)

    const inputValueAddress = (e) => {
        setAddress(e.target.value)
    }

    const submitAddress = () => {
        if(address == null || address == ""){
            setShow(false)
            return
        }
        setSubmit(address)
        setShow(true)
        setItemsCart([])

    }

    return(
        <div className="checkoutContainer">
            <div className="titleAddress">Select your address</div>
            <div className="center">
            <div className="inputBtn">
            <input type="text" placeholder="Type your address" className="inputWrapper"  onChange={inputValueAddress}/>
            <button className="submitBtn" onClick={submitAddress}>Submit</button>
            </div>
            <div className={show ? "show" : "thanksWrapper"}>
            <div className="thanks">Thank you. Your order has been accepted, and we will ship it to the address {submit} </div>
            <div className="iconSmile"><FaSmile className="smile"/></div>
            </div>
            <Link  to="/" className="backBtn">Back to Home</Link>
            </div>

        </div>
    )
}

export default Checkout;