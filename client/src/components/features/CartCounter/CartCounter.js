import React from 'react';
import './CartCounter.scss';

const CartCounter = (props) => (
    <div className='cart-counter'>{props.cartTotalPcs}</div>
)

export default CartCounter;