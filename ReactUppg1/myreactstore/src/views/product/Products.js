import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCatalog } from '../../store/actions/productCatalogActions'

import Product from '../../components/product/Product'




export default function Products() {
    const dispatch = useDispatch()
    const productCatalog = useSelector(state => state.productCatalog)
  
    useEffect(() => {
      dispatch(getProductCatalog())
    },[dispatch])

   

  

    return (
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3">
        {
          productCatalog.map(product => {
              return <Product key={product.id} product={product} />
          })
      }
        </div>
     

     

    </div>
    )
}