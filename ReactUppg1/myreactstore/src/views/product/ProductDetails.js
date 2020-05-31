import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'


export default function ProductDetails() {
    const dispatch = useDispatch()
    const add = (product) => {   
    dispatch(addToCart(product))
    }

    const { id } = useParams()
    const [product, setProduct] = useState('')

    useEffect(() => {  
        setProduct(id)
    }, [id])


    return (
        <div>
            Product Details { product }
        

        <div className="container my-5 py-5 z-depth-1">
        
        <section className="text-center">
            
            <h3 className="font-weight-bold mb-5">Product Details</h3>
            <div className="row">
                <div className="col-lg-6">
                    <div className="carousel-inner text-center text-md-left" role="listbox">
                        <div>
                            <img src="product.image" alt="product.name" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 text-center text-md-left">
                    <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong>{ product.name }</strong>
              </h2>
                    <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                <span className="red-text font-weight-bold">
                  <strong>${ product.price }</strong>
                </span>
              </h3>
                   
                    <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                        
                        <div className="card">
                           
                            <div className="card-header" role="tab" id="headingOne1">
                                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                    <h5 className="mb-0">
                        Description
                        <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                                </a>
                            </div>
                            
                            <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                                <div className="card-body">{ product.description }</div>
                            </div>
                        </div>
                       
                    </div>
                   
                    <section className="color">
                        <div className="mt-5">
                            <div className="row mt-3">
                                <div className="col-md-12 text-center text-md-left text-md-right">
                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => add(product)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                </div>
            </div>
        </section>
        
    </div>






    </div>
    )
}