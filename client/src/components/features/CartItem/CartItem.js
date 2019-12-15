import React from 'react';
import Button from '../../common/Button/Button';
import './CartItem.scss';

const CartItem = (props) => (
    <div className='cart-item'>
        <div className='cart-item__poster'>
            <img src={props.cartItem.posterUrl} alt={`${props.cartItem.title} movie poster`} />
        </div>            
        <div className='cart-item__title'>
            <p>{props.cartItem.title}</p>
        </div>
        <div className='cart-item__pcsprice'>
            <p>{props.cartItem.price} PLN/pc</p>
        </div>
        <div className='cart-item__button-plus'>
            <Button variant='primary' onClick={() => props.clickHandlePlus(props.cartItem.id, props.cart)}>+</Button>
        </div>
        <div className='cart-item__amount'>
            <p>{props.cartItem.cartAmount} pcs</p>
        </div>
        <div className='cart-item__button-minus'>
            <Button variant='primary' onClick={() => props.clickHandleMinus(props.cartItem.id, props.cart)}>-</Button>
        </div>
        <div className='cart-item__total-price'>
            <p>{props.cartItem.cartAmount * props.cartItem.price} PLN/total</p>
        </div>
        <div className='cart-item__button-x'>
            <Button variant='primary' onClick={() => props.clickHandleX(props.cartItem.id, props.cart)}>x</Button>
        </div>
    </div>
)
export default CartItem;