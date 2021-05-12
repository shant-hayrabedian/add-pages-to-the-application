import {useRouteMatch} from "react-router-dom"
import {useContext} from "react";
import {CartContext} from "../../Context";
import Button from "react-bootstrap/Button";
import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Product = () => {
    const id = useRouteMatch().params.id;
    const product = useContext(CartContext).products.find((item) => item.id === +id);
    const {error, isPending} = React.useContext(CartContext);
    const {addToCart} = React.useContext(CartContext);
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <Spinner animation="border" role="status">
                <span className="sr-only"/>
            </Spinner>}
            <article>
                <b>Product Number #{product.id}</b>
                <h3>Product Name:{product.name}</h3>
                <p>Product Description:{product.description}</p>
                <p>Product Price:{product.price}</p>
                <p>Product Color:{product.color}</p>
                {!product.image && (
                    <img src='/assets/default-image-620x600.jpg' className="noImages"/>
                )}
                <img src={product.image}/>
                <Button onClick={() => addToCart(product)} className="CartFooterButton" variant="info" size="lg">Add
                    To Cart</Button>
            </article>
        </div>
    )
}

export default Product;