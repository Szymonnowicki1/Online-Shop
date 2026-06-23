import React, { useState } from "react";
import "./navbar.css"
import { createContext, useContext } from "react";
import { GenderContext } from "../context/GenderContext";
import { FaShoppingCart  } from "react-icons/fa";
import logo from "../assets/ilustracja-pranie-projektowanie-logo-sklepu-odziezowego-wektor-projekt_629524-657.avif"
import { Link } from "react-router-dom";
const Navbar = ({itemsCart}) => {

        const {chooseGnder,setChooseGender} = useContext(GenderContext)

        const changeGenderToMen = () => {
            setChooseGender("Man")
        }

        const changeGenderToWoman = () => {
            setChooseGender("Woman")
        }
        
        const toogleClass = () => {
        }


        if(chooseGnder == "Man"){
            
        }

    return (
        <nav>
            <div className="leftSide">
                <Link to={"/"}><div><img src={logo} alt="" style={{ width: 50, height: 50 }} className="logo"/></div></Link>
                 <button
                 className={chooseGnder == "Man" ? "active" : "notActive"}
                 onClick={changeGenderToMen}
                >
                    MAN
                </button>

                <button
                 className={chooseGnder == "Woman" ? "active" : "notActive"}
                onClick={changeGenderToWoman}
                >
                    WOMAN
                </button>
            </div>
            <div className="rightSide">
                <div className="iconWrapper">
                    <Link to={"/shoppingCart"}>
                    <FaShoppingCart className="shopIcon"/>
                    <div className="shoppingCartLength">{itemsCart.length > 0  ? itemsCart.length : ""}</div>

                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar