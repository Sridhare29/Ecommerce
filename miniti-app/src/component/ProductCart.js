import React from 'react'

function ProductCart(props) {
  return (
    <div className='card m-2 shadow-sm' style={{ width: '18rem', borderRadius: '10px', overflow: 'hidden' }}>
      <div className='mt-2 text-center'>
        <img 
          src={props.image} 
          alt={props.title} 
          style={{ height: '200px', width: 'auto', maxWidth: '100%', objectFit: 'cover' }} 
          className='img-fluid'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title font-weight-bold' style={{ fontSize: '1.2rem' }}>{props.title}</h5>
        <h6 className='mt-2 text-muted'>Price: <span className="text-primary">${props.price}</span></h6>
        <h6 className='mt-2'>Rating: <span className='text-warning'>{props.rating.rate} ★</span></h6>
        <div className='mb-2 mt-3 justify-content: center'>
            {props.rating.count > 0 ? <button className='btn btn-success'>Available</button>: <button className='btn btn-danger'>Out-of-stock</button> }
        </div>
      </div>
    </div>
  )
}

export default ProductCart
