import {useRouteMatch} from "react-router-dom"
import {useContext} from "react";
import {CartContext} from "../../Context";
import Button from "react-bootstrap/Button";
import React from "react";
import Spinner from "react-bootstrap/Spinner";
import './Product.css'

const Product = () => {
    const id = useRouteMatch().params.id;
    const product = useContext(CartContext).products.find((item) => item.id === +id);
    const {error, isPending} = React.useContext(CartContext);
    const {addToCart} = React.useContext(CartContext);
    return (
        <div className="details">
            {error && <div>{error}</div>}
            {isPending && <Spinner animation="border" role="status">
                <span className="sr-only"/>
            </Spinner>}
            {!product.image && (
                <img src='/assets/default-image-620x600.jpg' className="noImages"/>
            )}
            <img src={product.image}/>
            <div className="box">
                <div className="row">
                    <b>Product Number #{product.id}</b>
                    <h2>Product Name:{product.name}</h2>
                    <p>Product Price:{product.price}</p>
                    <p>Product Color:{product.color}</p>
                </div>
                <p>Product Description:{product.description}</p>
                <Button onClick={() => addToCart(product)} variant="info" size="lg">Add
                    To Cart</Button>
            </div>

        </div>
    )
}

export default Product;