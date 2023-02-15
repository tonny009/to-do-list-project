import React from 'react'

import Navbar from './Navbar'
import './main.css'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="full-bg">
      <div className="image-overlay">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Main
