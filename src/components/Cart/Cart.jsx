import './Cart.css';
import {useContext} from "react";
import {CartContext} from "../../Context";
import Button from "react-bootstrap/Button";
import * as React from "react";
import {Link} from "react-router-dom";


const Cart = () => {
    const {cart, onDelete} = useContext(CartContext);
    return (
        <div>
            {cart.length === 0 && (
                <p className="noItems">The cart is empty Please Go to Product List & Add Products
                    <br/>
                    <Link to="/products" style={{textDecoration: 'none'}}>Go to Products...</Link></p>
            )}
            {cart && cart.map(cartProduct => {
                return (
                    <div className="detailsCart" key={cartProduct.id}>
                        {!cartProduct.image && (
                            <img src='/assets/default-image-620x600.jpg' className="noImages2"/>
                        )}
                        <img src={cartProduct.image}/>
                        <div className="box">
                            <div className="row">
                                <b>Product ID: {cartProduct.id}</b>
                                <h2>Product Name:{cartProduct.name}</h2>
                                <p>Product Price:{cartProduct.price}</p>
                                <p>Product Color:{cartProduct.color}</p>
                            </div>
                            <p>Product Description:{cartProduct.description}</p>
                            <Button className='deleteIt' variant="danger" onClick={() => {
                                onDelete(cartProduct.id);
                            }}>Delete Cart
                            </Button>
                        </div>
                    </div>
                )
            })}
            <div className="total">
                {cart.length !== 0 && (
                    <h1>You Have: {cart.length} Products in your cart</h1>)}
            </div>

        </div>
    )
}

export default Cart;
