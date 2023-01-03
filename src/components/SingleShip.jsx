// Deps
import { useContext, useEffect } from 'react'
// import Axios from "axios";
import '../App.css'

// Context
import { StarshipsContext } from '../context/StarshipsContext'


const SingleShip = () => {
    
  const {urlShip, getShip, nau } = useContext(StarshipsContext)
 
  useEffect(() => {
    getShip(urlShip)   
  }, [])
 
  let id;
  urlShip.length === 34 ? id = urlShip.slice(-2, -1) : id = urlShip.slice(-3, -1)
  let baseUrlImg = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
 
  
  
  return (
    <>
      <img src={baseUrlImg} alt={nau.name}></img>
      <h4>name: {nau.name}</h4>
      <h4>model: {nau.model}</h4>
      <h4>length: {nau.length}</h4>
      <h4>passengers: {nau.passengers}</h4>
      <h4>cargo_capacity: {nau.cargo_capacity}</h4>
      <h4>MGLT: {nau.MGLT}</h4>
      <h4>consumables: {nau.consumables}</h4>
      <h4>cost_in_credits: {nau.cost_in_credits}</h4>
      <h4>crew: {nau.crew}</h4>
      <h4>ax_atmosphering_speed: {nau.max_atmosphering_speed}</h4>
      <h4>starship_class: {nau.starship_class}</h4>
      <h4>created: {nau.created}</h4>
      <h4>edited: {nau.edited}</h4>
      {/* <h4>films: {nau.films.length}</h4> */}
      <h4>hyperdrive_rating: {nau.hyperdrive_rating}</h4>
      <h4>manufacturer: {nau.manufacturer}</h4>
      {/* <h4>pilots: {nau.pilots.length}</h4> */}
    </>
  )
}

export default SingleShip