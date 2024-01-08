import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
	return (
        <div className="navbar">
                <div className="brand">Ollivanders - The Wand Shop</div>
                <div className="links">
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/cart">Cart</Link>
                </div>
        </div>
	);
};

export default Navbar;
