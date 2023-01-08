// Deps
import { useContext } from 'react'
// Context
import { StarshipsContext } from '../context/StarshipsContext'

const Pilots = () => {

    const {dataPilot, getDataPilot, nau} = useContext(StarshipsContext)

    
     alert (JSON.stringify(nau.pilots.length))
    // alert (JSON.stringify(nau.pilots[0]))
  
  return (
    <>
   {/*    { nau.pilots.map((item)=>{
        console.log(item)
        // getDataPilot(item)
        
        return (
          <h5>{item}</h5>
        )}
      )} */}
    </>
  )
}

export default Pilots