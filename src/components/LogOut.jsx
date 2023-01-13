// Deps
import { useContext } from 'react'
import { Container, Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom'
// Context
import { StarshipsContext } from '../context/StarshipsContext'
//firebase
import firebaseApp from '../credentials'
import { getAuth, signOut} from 'firebase/auth'
const auth = getAuth (firebaseApp);

const LogOut = () => {
  // const { setUserGlobal, userGlobal } = useContext(StarshipsContext)
  // const signOut = () => {
      // localStorage.removeItem("user");
      // setUserGlobal(null);
      // return <Navigate to='/Wellcome'/>
  // }
  return (
    <Container>
      <Button
        onClick={() => signOut(auth)}
        className="w-50"
        type="button"
        variant="dark"
        >LOGOUT
      </Button>
    </Container>
  )
}
export default LogOut