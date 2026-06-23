import React from "react";
import "./addBtn"
const AddBtn = ({onClick}) => {
    return(
        <button onClick={onClick} className="addBtn">Add to cart</button>
    )
}

export default AddBtn;