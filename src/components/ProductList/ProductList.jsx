import {Link} from 'react-router-dom';
import './ProductList.css'
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
        <div id="product">
            {error && <div>{error}</div>}
            {isPending && <Spinner animation="border" role="status">
                <span className="sr-only"/>
            </Spinner>}
            {products && products.length > 0 && products.map(product => {
                    return (
                        <div className="card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                {!product.image && (
                                    <img src='/assets/default-image-620x600.jpg' style={{height: '150px'}}/>
                                )}
                                <img src={product.image} alt=""/>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                </h3>
                                <button onClick={() => addToCart(product)}>Add to cart</button>
                            </div>
                        </div>

                    )
                }
            )}
        </div>
    );
}

export default ProductList;