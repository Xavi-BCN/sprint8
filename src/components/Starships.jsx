// Deps
import { useContext } from 'react'
import '../styles/starships.css'

// Context
import { StarshipsContext } from '../context/StarshipsContext'

export const Starships = () => {
  const { starships } = useContext(StarshipsContext)
  console.log('estamos en starships.jsx')
  console.log(starships);


  return (
    <div className="row">
      {
        starships.map(item => {
          return (
            <div className="col12 col-md-8 mx-auto" key={item.name}>
              <div className="card mt-2">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.model}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

