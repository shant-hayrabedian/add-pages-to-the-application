import {Link} from "react-router-dom";
import './Header.css';
import * as React from "react";
import {useContext} from "react";
import {CartContext} from "../../Context";
import {GiShoppingCart} from "react-icons/all";

const Header = () => {
    const {cart} = useContext(CartContext);

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Adding pages to the application</Link></h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Product List</Link></li>
                    <li><Link to="/cart">
                        <GiShoppingCart/>Cart<span className="nav-cart"> {cart.length}</span>
                    </Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;