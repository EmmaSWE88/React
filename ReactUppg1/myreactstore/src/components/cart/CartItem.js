import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/actions/cartActions'

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
            <div className="cart-item d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <div className="p-2"> 
                         <img src={item.image} alt={item.name} className="img-fluid image-width" />
                    </div>
                    <div>
                    <div><strong>{item.name}</strong></div>
                    <div className="text-muted">{item.quantity} x {item.price}</div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
                <button className="btn btn-grey" onClickCapture={add}>+</button>
                <button className="btn btn-grey" onClick={remove}>-</button>
                </div>

                <div className="btn-group btn-group-sm" role="group" aria-label="trash">
                    <button className="btn btn-danger px-3" onClick={remove}><i className="fas fa-trash"></i></button>
                </div>
                <div className="dropdown-divider"></div>
            </div>
            
        </div>
        
 
      
    )
}