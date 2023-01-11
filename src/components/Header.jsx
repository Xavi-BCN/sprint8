// Deps
import React from 'react'
import '../styles/header.css'
import logo from '../assets/img/Star_Wars_logo_black.svg'


// Components
import { Navbar } from './Navbar'
// Deps
import { useContext } from 'react'
// Components
import Login from './Login'
import LoginOut from './LoginOut'
// Context
import { StarshipsContext } from '../context/StarshipsContext'

function Header() {
  const { user } = useContext(StarshipsContext)
  return (
    <>
    <div className='container-fluid'>
      <img className='img-fluid mx-auto d-block' src={logo} alt="logo" style={{ maxWidth: '200px' }} />
      { user ? <Login /> :  <LoginOut />}
    </div>
    <Navbar/>
    </>
  )
}

export default Header