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

  
  // style={{ backgroundColor: 'black' }}
  return (
    <>
      <div style={{ backgroundColor: 'black' }} className="col12 col-md-8 mx-auto mb-5 text-white" >
        <img src={baseUrlImg} style={{ width: "100%" }} className="card-img-top border border-5 border-danger border-0 border-bottom" alt={nau.name} />
        <div className="card-body">
          <h2 style={{ textTransform: 'uppercase', backgroundColor: 'black'}} className="card-title mt-3">{nau.name}</h2>
    <p className="card-text mt-3">
      Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y
      componer la mayor parte del contenido de la tarjeta.
    </p>
  </div>
  <div  className="row mt-3">
    <div className="col-6">
      <ul className="list-group border-0">
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Model: {nau.model}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Cost in credits: {nau.cost_in_credits}{/*/li*/}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Atmosphering Speed: {nau.max_atmosphering_speed}{/*/li*/}</li>
      </ul>
    </div>
    <div className="col-6">
      <ul className="list-group border-0">
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Manufacturer: {nau.manufacturer}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Length: {nau.length}{/*/li*/}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Crew: {nau.crew}{/*/li*/}</li>
      </ul>
    </div>
  </div>
</div>
      
 {/*      <img src={baseUrlImg} alt={nau.name}></img>
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
      {/* <h4>hyperdrive_rating: {nau.hyperdrive_rating}</h4>
      <h4>manufacturer: {nau.manufacturer}</h4> */}
      {/* <h4>pilots: {nau.pilots.length}</h4> */} 
    </>
  )
}

export default SingleShip