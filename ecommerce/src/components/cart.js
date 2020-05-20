import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {checkoutCart } from '../store/actions/cartActions'
import CartItem from './cartItem'

export default function Cart() {
    const dispatch = useDispatch()
    const shoppingcart = useSelector(state => state.cart.shoppingcart)
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

    const save = (shoppingcart) => {   
        dispatch(checkoutCart(shoppingcart))
    }

    return (
        <div>
            <div className="mb-4">
                {
                shoppingcart.map(product => {
                    return (<CartItem key={product.id} item={product} />)
                })
                }
            </div>
            
            <p>Total Amount: {totalCartAmount}</p>
            <p>Total Quantity: {totalCartQuantity}</p>
            <button onClick={() => save(shoppingcart)}>CHECKOUT</button>
        </div>
    )
}