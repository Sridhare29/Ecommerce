import React from 'react'
import { productsList } from '../data/ProductList'
import ProductCart from '../component/ProductCart'

function Dashboard() {
  return (
    <div className='row'>
        {productsList.map((product)=><ProductCart{...product} />)}
    </div>
  )
}

export default Dashboard
