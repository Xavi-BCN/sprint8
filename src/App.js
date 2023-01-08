//Provider
import { StarshipsContextProvider } from './context/StarshipsContext';

//Componets
import Header from "./components/Header"
import Wellcome from './pages/Wellcome';
import SingleShip from './components/SingleShip';
import { Starships } from './components/Starships';
// import Home from './pages/Home';

//Deps
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export const App = () => {
  
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
          
          {/* <Home /> */}
        </StarshipsContextProvider>
    </div>
  );
}


