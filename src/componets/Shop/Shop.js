import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddCart = (product) => {
        // console.log('clicked vaiya');
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>


            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleAddCart={handleAddCart}   ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order-cart</h1>
                <p>Slected Items: {cart.length}</p>

            </div>

        </div>
    );
};

export default Shop;