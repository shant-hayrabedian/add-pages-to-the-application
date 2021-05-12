import {Link} from "react-router-dom";
import './Header.css';
import * as React from "react";

function Header() {

    return (
        <nav className="navbar">
            <h1>Adding pages to the application</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Product List</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    );
}

export default Header;