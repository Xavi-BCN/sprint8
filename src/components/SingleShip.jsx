// Deps
import { useContext, useEffect } from 'react'
import ReactHowler from "react-howler"
import roboteffect from '../assets/music/R2O2.mp3'
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
  console.log(baseUrlImg);

  
  return (
    <>
      {/* <ReactHowler src={roboteffect} playing={true} /> */}
      <div style={{ backgroundColor: 'black' }} className="col12 col-md-8 w-50 mx-auto mt-5 mb-5 text-white" >
      <img src={baseUrlImg} style={{  }} className="card-img-top border border-5 border-danger border-0 border-bottom " alt={nau.name} />  
        <div className="card-body">
          <h2 style={{ textTransform: 'uppercase', backgroundColor: 'black'}} className="card-title mt-3">{nau.name}</h2>
    <p className="card-text mt-3">
      
    </p>
  </div>
  <div  className="row mt-3">
    <div className="col12 col-md-6">
      <ul className="list-group border-0">
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Model: {nau.model}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Cost in credits: {nau.cost_in_credits}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Atmosphering Speed: {nau.max_atmosphering_speed}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Cargo Capacity: {nau.cargo_capacity}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Consumables: {nau.consumables}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Hyperdrive Rating: {nau.hyperdrive_rating}</li>
      </ul>
    </div>
    <div className="col12 col-md-6">
      <ul className="list-group border-0">
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Manufacturer: {nau.manufacturer}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Length: {nau.length}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Crew: {nau.crew}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Starship class: {nau.starship_class}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">MGLT: {nau.MGLT}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Films: {nau.films.length}</li>
        <li style={{ backgroundColor: 'black' }} className="list-group-item text-white">Pilots: {nau.pilots.length}</li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default SingleShip