import React, { useContext } from 'react';
import {CatalogContext} from "../Context/CatalogContext";


export const CartItem = (props) => {
    const {id, productName, productImage, price} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(CatalogContext);
    
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p> ${price}</p>
            <div className="countHandler">
          <button onClick={()=>{removeFromCart(id)}}>
            -
          </button>
          <input value ={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
          <button onClick={()=>{addToCart(id)}}>
            +
          </button>
          </div>
        </div>
    </div>
  )
}

