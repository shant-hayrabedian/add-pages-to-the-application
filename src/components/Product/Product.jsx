import { useParams } from "react-router-dom"
import UseFetch from "../UseFetch/UseFetch";
import {useHistory} from "react-router-dom"

const Product = ({match}) => {
    const id = useParams()
    const { data: product, error, isPending} = UseFetch('././product_list.json/' + id);
    const history = useHistory();
    console.log({product})

    const handleClick = () => {
        fetch('././product_list.json' + product.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (
                <article>
                    <b>Product ID: {product.id}</b>
                    <h2>Product Name:{product.name}</h2>
                    <p>Product Description:{product.description}</p>
                    <p>Product Price:{product.price}</p>
                    <p>Product Color:{product.color}</p>
                    <img src={product.image}/>
                    <button onClick={handleClick}>Delete blog</button>
                </article>
            )}
        </div>
    )
}

export default Product;