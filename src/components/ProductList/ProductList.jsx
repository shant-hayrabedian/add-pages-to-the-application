import {Link, Switch, Route} from 'react-router-dom';
import UseFetch from "../UseFetch/UseFetch";
import {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import './ProductList.css'
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck'
import Product from "../Product/Product";

const ProductList = () => {
    const {error, isPending, data: products} = UseFetch('././product_list.json')
    const [items, setItems] = useState([]);

    // async function fetchData() {
    //     const res = await fetch('././product_list.json');
    //     res.json()
    //         .then(res => setTimeout(() => {
    //             setItems(res);
    //         }, 2000));
    // }
    //
    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div className="blog-list">
            {products.map(product => {
                    return (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                                <Card style={{width: '30rem', border: '0px', display: 'flex'}}>

                                    <Card.Title className="itemName">{product.id} - {product.name}</Card.Title>
                                    {!product.image && (
                                        <Card.Img src='/assets/default-image-620x600.jpg' className="noImages"/>
                                    )}
                                    <Card.Img src={product.image} className="itemImages"/>
                                    <Button className="CartFooterButton" variant="info" size="lg">Add To Cart</Button>

                                </Card>
                            </CardDeck>
                        </Link>
                    )
                }
            )}
            {/*<Switch>*/}
            {/*    <Route path="/products/:id" component={Product} />*/}
            {/*</Switch>*/}

        </div>
    );
}

export default ProductList;