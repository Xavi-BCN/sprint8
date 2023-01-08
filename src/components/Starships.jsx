// Deps
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import '../styles/starships.css'
import ReactHowler from "react-howler"
import imperialSong from '../assets/music/Imperialsong.mp3'

// Context
import { StarshipsContext } from '../context/StarshipsContext'

// Compnent
import { Pagination } from './Pagination'
import  Starship_Item  from './Starship_Item'

export const Starships = () => {
  const { starships, user } = useContext(StarshipsContext)

  if(!user){
    return <Navigate to='/Wellcome'/>
  }
 

  return (
    <div className="row">
      <ReactHowler src={imperialSong} playing={false} />
      <Pagination />
      {
        starships.map((item, index) => {
          return (
            <Starship_Item
              key={item.name}
              name={item.name}
              model={item.model}
              url={item.url}
            />
          )}
        )
      }
    </div>
  )
}
