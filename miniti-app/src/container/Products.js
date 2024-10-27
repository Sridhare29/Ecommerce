import React from 'react'
import { useParams } from 'react-router-dom'
import { productsList } from '../data/ProductList';

function Products() {
  const params = useParams();
  const items = productsList.find((element) => element.id == parseInt(params.id))
  return (
    <div className="card m-2 shadow-sm">
      <div className="mt-3 text-center">
        <img
          src={items.image}
          alt={items.title}
          style={{
            height: "250px",
            width: "300px",
            maxWidth: "100%",
            objectFit: "cover",
          }}
          className="img-fluid"
        />
      </div>
      <div className="mt-2 card-body">
        <h5
          className="card-title font-weight-bold"
          style={{ fontSize: "1.2rem" }}
        >
          {items.title}
        </h5>
        <h6 className="mt-2 text-muted">
          Price: <span className="text-primary">${items.price}</span>
        </h6>
        <h6 className="mt-2">
          Rating: <span className="text-warning">{items.rating.rate} ★</span>
        </h6>
        <div className="mb-2 mt-3 justify-content: center">
          {items.rating.count > 0 ? (
           <>
            <button className="btn btn-success">Buy Now</button>
            <button className="ms-3 btn btn-success">Add Cart</button>
            </>
          ) : (
            <button className="btn btn-danger">Out-of-stock</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products
