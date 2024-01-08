import React from 'react'
import {storeProducts} from "../../Data/Data";
import {Product} from "./Product";
import "./Catalog.css";


export const Catalog = () => {
  return (
    <div className="catalog">
        <div className="catalogTitle">
            <h5>Products</h5>
        </div>
        <div className="products">
            {storeProducts.map((product=>(<Product data = {product}/>))) }
        </div>
    </div>
  )
}
