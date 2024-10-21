import React from 'react'
import Header from '../component/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

function Home() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default Home
