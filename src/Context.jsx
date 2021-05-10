import React, {useEffect, useState} from "react";
import UseFetch from "./components/UseFetch/UseFetch";

const CartContext = React.createContext();

const CartProvider = (props) => {
    // const { data:products} = UseFetch('././product_list.json')
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const getData = () => {
        setTimeout(() => {
            fetch('product_list.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then(function (response) {
                    if (!response.ok) {
                        throw Error('Could Not fetch th data for that resource');
                    }
                    return response.json();
                })
                .then(function (myJson) {
                    setProducts(myJson)
                    setIsPending(false);
                    setError(null);
                }).catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
    }
    useEffect(() => {
        getData()
    }, [])

    const addToCart = (product) => {
        setCart([...cart, product])
    }
    const onDelete = (id) => {
        let deleteCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(deleteCart);
    }


    return <CartContext.Provider
        value={{products, setProducts, cart, setCart, addToCart, onDelete, isPending, setIsPending, error, setError, getData}}
    >
        {props.children}
    </CartContext.Provider>
}
export {CartContext, CartProvider}



