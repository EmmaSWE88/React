import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {clearCart,checkoutCart } from '../../store/actions/cartActions'

import CartItem from './CartItem'

export default function Cart() {
    const dispatch = useDispatch()
    const shoppingcart = useSelector(state => state.cart.shoppingcart)
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

    const save = (shoppingcart) => {   
        dispatch(checkoutCart(shoppingcart))
    }

    const clear = () => {
        dispatch(clearCart())
     }
  
    return (

        <div>
            <div>
                {
                shoppingcart.map(product => {
                    return (<CartItem key={product.id} item={product} />)
                })
                }
            </div>
            
           
            
            <div className="p-2 text-center">
                <p>Total Amount: {totalCartAmount}</p>
                <p>Total Quantity: {totalCartQuantity}</p>
            </div>
            <button className="ml-2 btn btn-primary btn-sm" onClick={() => clear()}>CLEAR CART</button>
            <button className="ml-2 btn btn-primary btn-sm" onClick={() => save(shoppingcart)}>CHECKOUT</button>
        </div>
    )
}