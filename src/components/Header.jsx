// Deps
import React from 'react'
import '../styles/header.css'
import logo from '../assets/img/Star_Wars_logo_black.svg'


// Components
import { Navbar } from './Navbar'
import Login from './Login'

function Header() {
  return (
    <>
    <div className='container-fluid'>
      <img className='img-fluid mx-auto d-block' src={logo} alt="logo" style={{ maxWidth: '200px' }} />
      <Login />
    </div>
    <Navbar/>
    </>
  )
}

export default Header