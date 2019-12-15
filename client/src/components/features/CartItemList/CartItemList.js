import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartItemList = (props) => (
    <div>
        {props.cart.map(cartItem => <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            clickHandlePlus={props.clickHandlePlus}
            clickHandleMinus={props.clickHandleMinus}
            clickHandleX={props.clickHandleX}
            cart={props.cart} />)}
    </div>
)

export default CartItemList;