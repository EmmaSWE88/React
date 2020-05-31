
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'

export default function Product({product}) {
    const dispatch = useDispatch()
    
    const add = (product) => {   
        dispatch(addToCart(product))
    }

    return (
        <div>
            <span>{product.name}</span>
            <button className="ml-2 btn btn-success btn-sm" onClick={() => add(product)}>ADD TO CART</button>
        </div>
    )
}