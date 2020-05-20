import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../store/actions/cartActions'

export default function CartItem({item}) {
    const dispatch = useDispatch()

    const add = (event) => {    
        event.stopPropagation()

        dispatch(addToCart(item))
      }

      const remove = (event) => {  
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        dispatch(removeFromCart(item.id))
      }
    
    return (
        <div>
            <div>
                <div><strong>{item.name}</strong></div>
                <div className="text-muted">{item.quantity} x {item.price}</div>
            </div>
            <div>
                <button onClickCapture={add}>+</button>
                <button onClick={remove}>-</button>
            </div>
        </div>
    )
}