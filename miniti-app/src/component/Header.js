import React from 'react'

function Header() {
  return (
    <div className="p-3" style={{ backgroundColor: 'rgba(135, 206, 250, 0.5)' }}>
    <div className="container d-flex justify-content-between align-items-center">
      <h3 className="mb-0 text-dark">My Website</h3>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-dark me-3 rounded-pill"> 
          <i className="bi bi-house-door"></i> Home
        </button>
        <input
          className="form-control rounded-pill me-3"
          type="search"
          placeholder="Search..."
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333', border: '1px solid #ccc' }}  
        />
        <button className="btn btn-outline-dark rounded-pill">
          <i className="bi bi-search"></i> Search
        </button>
      </div>
    </div>
  </div>  
  )
}

export default Header
