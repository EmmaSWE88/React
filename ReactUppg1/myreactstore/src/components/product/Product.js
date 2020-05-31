import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'
import {Link} from 'react-router-dom'

export default function Product({product}) {

const dispatch = useDispatch()
const add = (product) => {   
dispatch(addToCart(product))
}

return (
    <div >
        <div className="col mb-4">
      
            <div className="card">  
                <div className="img-container"><img src={product.image} alt={product.name} /></div>
        
            
                <div className="card-body">
                    <h4 className="card-title">{ product.name }</h4>
                    <p className="card-text">{ product.shortDescription }</p>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => add(product)}>Add To Cart</button>
                    <Link to="/products/:id" className="btn btn-primary nav-link">Details</Link>
                </div>
            </div>
        </div>

    </div>
)
}
