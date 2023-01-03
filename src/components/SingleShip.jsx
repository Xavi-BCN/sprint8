// Deps
import { useContext } from 'react'
// import Axios from "axios";
import '../App.css'

// Context
import { StarshipsContext } from '../context/StarshipsContext'


const SingleShip = () => {
    
    const {urlShip, getShip, nau } = useContext(StarshipsContext)
    console.log(urlShip)
    getShip(urlShip)   
    console.log({nau})
    
    
   
  return (
    <div>
        <h4>Este es el modelo:</h4>
    </div>
  )
}

export default SingleShip