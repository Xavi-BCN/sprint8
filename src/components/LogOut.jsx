// Deps
import { Container, Button } from "react-bootstrap";
import '../styles/Logout.css'

//firebase
import firebaseApp from '../credentials'
import { getAuth, signOut} from 'firebase/auth'
const auth = getAuth (firebaseApp);

const LogOut = () => {
 
  return (
    <>
      <Button
        onClick={() => signOut(auth)}
        className="btnlogout mt-5"
        type="button"
        variant="dark"
        >LOGOUT 
      </Button>
    </>
  )
}
export default LogOut