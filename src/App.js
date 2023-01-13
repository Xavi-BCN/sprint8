//Provider
import { StarshipsContextProvider } from './context/StarshipsContext';
import { useContext } from 'react'
import { StarshipsContext } from './context/StarshipsContext'

//Componets
import Header from "./components/Header"
import Wellcome from './pages/Wellcome';
import SingleShip from './components/SingleShip';
import { Starships } from './components/Starships';

//Deps
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
//Firebase
import firebaseApp from './credentials.js'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(firebaseApp)

export const App = () => {
  const { userGlobal, setUserGlobal } = useContext(StarshipsContext)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
      // Si hay sesion iniciada
      setUserGlobal(usuarioFirebase)
      console.log(usuarioFirebase)
    }else{
      // Si no hay sesion iniciada
      setUserGlobal(null)
      console.log('Sesion No iniciada')
    }
  })



  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Wellcome />} />
          <Route path='/Wellcome' element={<Wellcome />} />
          <Route path='/Starships' element={<Starships />} />
          <Route path='/Singleship' element={<SingleShip />} />
        </Routes>
      </BrowserRouter>
        <StarshipsContextProvider>
          
          
        </StarshipsContextProvider>
    </div>
  );
}


