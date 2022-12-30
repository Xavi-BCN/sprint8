// Deps
import React from 'react'
import '../styles/header.css'
import logo from '../assets/img/logo.webp'

// Components
import { Navbar } from './Navbar'

function Header() {
  return (
    <>
    <div className='container alert alert-success '>
      <img className='img mt-3' src={logo} alt="logo"  />
    </div>
    <Navbar/>
    </>
  )
}

export default Header