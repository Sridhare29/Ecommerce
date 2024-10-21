import React from 'react'

function Header() {
  return (
    <div className="p-4 bg-gradient bg-secondary text-white shadow-lg">
    <h3 className="text-center mb-4">Header</h3>
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex align-items-center">
        <button className="btn btn-outline-light me-4 rounded-pill">
          <i className="bi bi-house-door"></i> Home
        </button>
        <input
          className="form-control rounded-pill"
          type="search"
          placeholder="Search.."
        />
        <button className="btn btn-outline-light ms-3 rounded-pill">
          <i className="bi bi-search"></i> Search
        </button>
      </div>
    </div>
  </div>  
  )
}

export default Header
