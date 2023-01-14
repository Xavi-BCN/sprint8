// Deps
import { Container, Button } from "react-bootstrap";
import '../styles/Logout.css'

//firebase
import firebaseApp from '../credentials'
import { getAuth, signOut} from 'firebase/auth'
const auth = getAuth (firebaseApp);

const LogOut = () => {
 
  return (
    <Container>
      <Button
        onClick={() => signOut(auth)}
        className="btnlogout"
        type="button"
        variant="dark"
        >LOGOUT 
      </Button>
    </Container>
  )
}
export default LogOut