import React from "react";
import { useState, createContext, useContext } from "react";
import { GenderContext } from "../context/GenderContext";

import "./menu.css"
const Menu = ({clothes,setClothes,allClothes}) => {

        const {chooseGnder,setChooseGender} = useContext(GenderContext)

        const sortByElements = (e) => {
            if(e.target.value == "higher-price"){
                const sorted = [...clothes].sort((a,b) => {
                    return b.price - a.price
                })
                setClothes(sorted)
            }
            else if(e.target.value == "lower-price"){
                const sorted = [...clothes].sort((a,b) => {
                    return a.price - b.price
                })
                setClothes(sorted)
            }
            else if(e.target.value == "alphabetic"){
                const sorted = [...clothes].sort((a,b) => {
                    return   a.title.localeCompare(b.title)

                })
                setClothes(sorted)
            }
        }

        const typeOfClothes = (e) => {
            if(chooseGnder == "Man"){
                const firstArray = allClothes.filter((x) => x.gender == "man")
                const newElements = firstArray.filter((x) => x.category == e.target.value)
                setClothes(newElements)
            }
            else if(chooseGnder == "Woman"){
                const firstArray = allClothes.filter((x) => x.gender == "woman")
                const newElements = firstArray.filter((x) => x.category == e.target.value)
                setClothes(newElements)
            }
            
        }
        
        const showAllClothes = () => {
            setClothes(allClothes)
        }

    return(
        <div>
            <div className="line">
            <div className="lineTxt">{chooseGnder}</div>
            <div className="selectContainer">
            <select className="select" name="sort" id="" onChange={sortByElements}>
                <option value="sort-by">Sort by:</option>
                <option value="higher-price">higher to lower</option>
                <option value="lower-price">lower to higher</option>
                <option value="alphabetic">alphabetic</option>
            </select>
            <div className="arrow">▼</div>
            </div>
            </div>
            <div className="category">
            <button className="categoryBtn" value="all" onClick={showAllClothes}>All</button>
            <button className="categoryBtn" value="shoes" onClick={typeOfClothes}>Boots</button>
            <button className="categoryBtn" value="trausers" onClick={typeOfClothes}>Trausers</button>
            <button className="categoryBtn" value="hoodie" onClick={typeOfClothes}>Hoodie</button>
            <button className="categoryBtn" value="hat" onClick={typeOfClothes}>Hat</button>
            <button className="categoryBtn" value="tshirt" onClick={typeOfClothes}>T-shirt</button>
            <button className="categoryBtn" value="jeans" onClick={typeOfClothes}>Jeans</button>
            </div>
        </div>
    )
}

export default Menu;