import React, { useState } from "react";
import { useParams, useLocation  } from "react-router-dom";
import AddBtn from "./addBtn";
import "./productDetails.css"

const ProductDetails = ({addToCart}) => {

    const location = useLocation();
    const product = location.state?.product
    const { id } = useParams();
    const [actualPicture,setActualPicture] = useState(0)
    
     if (!product) {
     return <h1>Brak produktu</h1>;
    } 

    const nextSlide = () => {
      if(actualPicture == product.images.length - 1){
        setActualPicture(0)
      }
      else {
        setActualPicture(prev => prev + 1)

      }
    }

    const prevSlide = () => {
      if(actualPicture == 0){
        setActualPicture(product.images.length - 1) 
      }
      else {
        setActualPicture(prev => prev - 1)

      }
    }
  return (
     <div className="productDetailsContainer">
      <div className="productLeft">
      <img src={product.images[actualPicture]} className="productImage" alt="" />
      <div className="btnContainer">
      <button className="slideBtn" onClick={prevSlide}>&#8592;</button>
      <button className="slideBtn" onClick={nextSlide}>&#8594;</button></div>
      </div>
      <div className="productRight">
        <h1 className="productTitle">{product.title}</h1>
        <div className="productDescription">{product.description}</div>
        <div className="productColor">Color: {product.color}</div>
        <div className="price">{product.price} zl</div>
        <AddBtn className="addBtn" onClick={()=>addToCart(product)}/>
      </div>
    </div>
  );
}

export default ProductDetails;