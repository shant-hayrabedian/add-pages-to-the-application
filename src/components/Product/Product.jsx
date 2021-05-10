import {Link, useParams} from "react-router-dom"
import UseFetch from "../UseFetch/UseFetch";
import {useHistory} from "react-router-dom"
import {useContext} from "react";
import {CartContext} from "../../Context";
import Button from "react-bootstrap/Button";
import * as React from "react";
import Card from "react-bootstrap/Card";

const Product = () => {
    // const prod = { id: props.id, name: props.name, price: props.price };
    const {id} = useParams()
    const {addToCart} = React.useContext(CartContext);
    const {error, isPending} = React.useContext(CartContext);
    const {product} = React.useContext(CartContext);


    // const { data: product, error, isPending} = UseFetch('././' + id);
    // const { data: product, error, isPending} = UseFetch('././' + id);
    // const { product} = useContext(CartContext)
    // const history = useHistory();
    // const [product, setProduct] = useContext(CartContext)
    // console.log(prod)
    //
    // const handleClick = () => {
    //     fetch('././product_list.json' + product.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         history.push('/')
    //     })
    // }
    // console.log(product)

    return (
        <div className="blog-details">
            <h1>{id}</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (
                <article>
                    <b>Product ID: {product.id}</b>
                    <h2>Product Name:{product.name}</h2>
                    <p>Product Description:{product.description}</p>
                    <p>Product Price:{product.price}</p>
                    <p>Product Color:{product.color}</p>
                    {!product.image && (
                        <img src='/assets/default-image-620x600.jpg' className="noImages"/>
                    )}
                    <img src={product.image}/>
                    <Button onClick={() => addToCart(product)} className="CartFooterButton" variant="info" size="lg">Add To Cart</Button>
                </article>

            )}
            {console.log(product)}
        </div>
    )
}

export default Product;