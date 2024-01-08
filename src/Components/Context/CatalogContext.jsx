import React, { createContext, useState } from 'react';

import {storeProducts} from "../../Data/Data"


export const CatalogContext = createContext(null);

export const CatalogContextProvider = (props) => {
    const getDefaultCart = () => {
        let cart = {};
        for(let i = 1; i<storeProducts.length+1; i++) {
            cart[i] = 0;
        }
        return cart;
    }
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}));

    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}));

    }
    const updateCartItemCount = (newItem, itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : newItem}));

    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = storeProducts.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };
    const checkout = () => {
        setCartItems(getDefaultCart());
      };
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, checkout};
    
  return (
    <CatalogContext.Provider value = {contextValue}>{props.children}</CatalogContext.Provider>
  )
}
