import React, {useEffect, useState} from "react";

const CartContext = React.createContext();
const CartProvider = ({children}) => {
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
        value={{products, cart, addToCart, onDelete, isPending, error}}>
        {children}
    </CartContext.Provider>
}
export {CartContext, CartProvider}



