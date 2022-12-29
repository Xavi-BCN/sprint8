//Provider
import { StarshipsContextProvider } from './context/StarshipsContext';

//Componets
import Header from "./components/Header"
import Home from './pages/Home';

//Deps
import './App.css';

export const App = () => {
  
  return (
    <div className="App">
      
      <StarshipsContextProvider>
        <Header />
        <Home />
      </StarshipsContextProvider>
    </div>
  );
}


