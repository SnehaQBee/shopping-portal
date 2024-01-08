import React, {useContext} from 'react'
import {storeProducts} from "../../Data/Data";
import {CatalogContext} from "../Context/CatalogContext";
import {CartItem} from "./CartItem";
import { useNavigate } from "react-router-dom";
import   "./Cart.css";


export const Cart = () => {
  const {cartItems, getTotalCartAmount, checkout} = useContext(CatalogContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      {totalAmount > 0 ? (
        <div>
          <div>
          <h1 style= {{textAlign: "center"}}>Your cart</h1>
          </div>
            <div className="carProduct">
              {storeProducts.map((product)=>{
                if(cartItems[product.id] !== 0) {
                  return <CartItem data = {product} />;
                }
              })}
            </div>
            <div className="checkout">
              <div className="totalStyle"> Subtotal: ${totalAmount} </div>
              <button onClick={() => navigate("/catalog")}> Continue Shopping </button>
              <button onClick={() => { 
                  checkout();
                  navigate("/checkout");
                }}
              >
                
                Checkout{" "}
              </button>
            </div>
        </div>
          ): (
            <div className="cart">
              <div>
              <h1 style= {{textAlign: "center"}}>Your cart</h1>
              </div>
              <div className="cart--empty-message">Your cart is currently empty!</div>
            </div>
      )}
    </div>
  )
}
