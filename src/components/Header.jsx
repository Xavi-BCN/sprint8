// Deps

import '../styles/header.css'
import logo from '../assets/img/Star_Wars_logo_black.svg'
// Deps
import { useContext } from 'react'
// import { Navigate } from 'react-router-dom'
// Components
import { Navbar } from './Navbar'
import LogOut from './LogOut'
import Login from './Login'
import SignIn from './SignIn'
import Wellcome from '../pages/Wellcome'

// Context
import { StarshipsContext } from '../context/StarshipsContext'

function Header() {
  const { userGlobal } = useContext(StarshipsContext)

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
          <LogOut />
          </div>
          <div className='col-4'>
            <img className='img-fluid mx-auto d-block' src={logo} alt="logo" style={{ maxWidth: '300px' }} />
            
          </div>
          <div className='col-4'>
          <Login /><SignIn />
            {/* { userGlobal ? <LogOut /> : <Login />} */}
          </div>
        </div>
      </div>
    <Navbar/>
    </>
  )
}

export default Header