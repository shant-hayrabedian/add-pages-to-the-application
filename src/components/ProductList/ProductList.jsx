import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './ProductList.css'
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck'
import {CartContext} from "../../Context";
import * as React from "react";
import Spinner from 'react-bootstrap/Spinner';

const ProductList = () => {
    const {products, addToCart} = React.useContext(CartContext);
    const {error, isPending} = React.useContext(CartContext);
    if (products === null) {
        return <Spinner animation="border" role="status">
            <span className="sr-only"/>
        </Spinner>;
    }

    return (
        <div className="blog-list">
            {error && <div>{error}</div>}
            {isPending && <Spinner animation="border" role="status">
                <span className="sr-only"/>
            </Spinner>}
            {products && products.length > 0 && products.map(product => {
                    return (
                        <CardDeck style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}} key={product.id}>
                            <Card style={{width: '35rem', border: '0px', display: 'flex'}}>
                                <Link
                                    to={`/products/${product.id}`}>
                                    <Card.Title className="itemName">{product.id} - {product.name}</Card.Title></Link>
                                {!product.image && (
                                    <Card.Img src='/assets/default-image-620x600.jpg' className="noImages"/>
                                )}
                                <Card.Img src={product.image} className="itemImages"/>

                                <Button onClick={() => addToCart(product)} className="CartFooterButton" variant="info"
                                        size="lg">Add To Cart</Button>
                            </Card>
                        </CardDeck>

                    )
                }
            )}
        </div>
    );
}

export default ProductList;