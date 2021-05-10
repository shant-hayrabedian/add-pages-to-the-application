import {Link, Switch, Route} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './ProductList.css'
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck'
import Product from "../Product/Product";
import {CartContext} from "../../Context";
import * as React from "react";
import Spinner from 'react-bootstrap/Spinner';

const ProductList = () => {
    const {products, addToCart} = React.useContext(CartContext)
    const {error, isPending} = React.useContext(CartContext)

    if (products === null) {
        return <Spinner animation="border" role="status">
            <span className="sr-only"/>
        </Spinner>;
    }

    const handleSort = (value) => {
        console.log(value)
    }

    return (
        <div className="blog-list">
            {error && <div>{error}</div>}
            {isPending && <Spinner animation="border" role="status">
                <span className="sr-only"/>
            </Spinner>}
            {products && products.length > 0 && products.map(product => {
                    return (
                        <CardDeck style={{display: 'flex', flexDirection: 'row'}} key={product.id}>
                            <Card style={{width: '30rem', border: '0px', display: 'flex'}}>
                                <Link
                                    to={`/products/${product.id}`} onClick={handleSort(product.id)}>
                                    <Card.Title className="itemName">{product.id} - {product.name}</Card.Title>
                                    {!product.image && (
                                        <Card.Img src='/assets/default-image-620x600.jpg' className="noImages"/>
                                    )}
                                    <Card.Img src={product.image} className="itemImages"/>
                                    {/*<Product products={product} />*/}
                                </Link>
                                <Button onClick={() => addToCart(product)} className="CartFooterButton" variant="info"
                                        size="lg">Add To Cart</Button>
                            </Card>
                            {/*<Switch>*/}
                            {/*    <Route path="/products/:id" component={<Product products={products} />} />*/}
                            {/*</Switch>*/}
                        </CardDeck>

                    )
                }
            )}


        </div>
    );
}

export default ProductList;