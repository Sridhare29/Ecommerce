import React from 'react'
import Header from '../component/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Products from './Products'

function Home() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='products/:id' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default Home
