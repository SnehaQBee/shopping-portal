import React, { useContext } from 'react';
import {CatalogContext} from "../Context/CatalogContext";


export const Product = (props) => {
    const {cartItems, addToCart} = useContext(CatalogContext);
    const {id, productName, productImage, price, owner} = props.data;
    const cartAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b><h3>{owner}</h3>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className = "addToCartBttn" onClick={()=>addToCart(id)}>
        Add to Cart{cartAmount > 0 && <> ({cartAmount})</> }</button>
    </div>
    
  )
}
