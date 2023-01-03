// Deps
import { Link } from 'react-router-dom'
import { useContext } from 'react'
//  import '../styles/starships.css'

// Context
import { StarshipsContext } from '../context/StarshipsContext'

const Starship_Item = ({ model, name, url }) => {
  const { setUrlShip } = useContext(StarshipsContext)
  
  return (
    <Link to={"/Singleship"} onClick={() => setUrlShip(url)}>
    <div className="col12 col-md-8 mx-auto" key={name}>
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{model}</p>
          <p className="card-text">{url}</p>
        </div>
      </div>
    </div>
    </Link>
  )


}

export default Starship_Item