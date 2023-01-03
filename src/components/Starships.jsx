// Deps
import { useContext } from 'react'
import '../styles/starships.css'

// Context
import { StarshipsContext } from '../context/StarshipsContext'

// Compnent
import { Pagination } from './Pagination'
import  Starship_Item  from './Starship_Item'

export const Starships = () => {
  const { starships } = useContext(StarshipsContext)
 

  return (
    <div className="row">
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
