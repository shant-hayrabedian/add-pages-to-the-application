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
                <p className="noItems">The cart is empty Please Go to Products List & Add Products
                    <br/>
                    <Link to="/products" style={{textDecoration: 'none'}}>Go to Products...</Link></p>
            )}
            {cart && cart.map(car => {
                return (
                    <div key={car.id}>
                        <article>
                            <b>Product ID: {car.id}</b>
                            <h2>Product Name:{car.name}</h2>
                            <p>Product Description:{car.description}</p>
                            <p>Product Price:{car.price}</p>
                            <p>Product Color:{car.color}</p>
                            {!car.image && (
                                <img src='/assets/default-image-620x600.jpg' className="noImages"/>
                            )}
                            <img src={car.image}/>
                            <Button variant="danger" onClick={() => {
                                onDelete(car.id);
                            }}>Delete Cart
                            </Button>
                        </article>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart;
