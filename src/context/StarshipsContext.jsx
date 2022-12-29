// Deps
import { createContext, useState , useEffect } from "react";
import Axios from "axios";

export const StarshipsContext = createContext();

export const StarshipsContextProvider = ( { children } ) => {
    const [starships, setStarships] = useState([]);


    useEffect(() => {
        Axios.get('https://swapi.dev/api/starships/')
            .then(response => {
                if (response.status === 200){
                    const { results } = response.data
                    setStarships(results)
                }
            })
    }, [])
    

    return (
        <StarshipsContext.Provider value={{
            starships
        }}>
            {children}
        </StarshipsContext.Provider>
    )
}