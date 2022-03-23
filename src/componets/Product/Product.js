import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const { name, img, seller, price, ratings } = props.product;
    const { handleAddCart } = props;

    return (
        <div className='products-style'>

            <img src={img} alt="" />
            <div className='product info'>
                <h1>Name:{name}</h1>
                <p><small>Seller:{seller}</small></p>
                <p><small>Price:{price}</small></p>
                <p><small>Ratings:{ratings}</small>stars</p>
            </div>
            <button onClick={() => handleAddCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>

    );
};

export default Product;