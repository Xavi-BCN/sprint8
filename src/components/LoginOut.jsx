
// Deps
import { useContext } from 'react'
// Context
import { StarshipsContext } from '../context/StarshipsContext'

const LogOut = () => {
  const { setUser } = useContext(StarshipsContext)

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert('Has salido')
  }
  
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={logoutUser}
        >
            SIGN OUT
        </button>
      
        </>
  )
}

export default LogOut