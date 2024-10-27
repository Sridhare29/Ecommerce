import React from 'react'
import { productsList } from '../data/ProductList'
import ProductCart from '../component/ProductCart'

function Dashboard() {
  return (
    <div className='row'>
        {productsList.map((product)=><ProductCart{...product} key={product.id}/>)}
    </div>
  )
}

export default Dashboard
