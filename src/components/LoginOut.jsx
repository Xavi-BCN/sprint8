
// Deps
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

// Context
import { StarshipsContext } from '../context/StarshipsContext'

const LogOut = () => {
  const { setUserGlobal, userGlobal } = useContext(StarshipsContext)
  const logoutUser = () => {
      // localStorage.removeItem("user");
      setUserGlobal(null);
      // return <Navigate to='/Wellcome'/>
  }
  return (
    <>
      <button
        type="button"
        className="logbtn btn btn-primary"
        onClick={logoutUser}
        >
            SIGN OUT
        </button>
        </>
  )
}
export default LogOut