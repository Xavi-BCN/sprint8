// Deps
import { createContext, useState , useEffect } from "react";
import Axios from "axios";

export const StarshipsContext = createContext();

export const StarshipsContextProvider = ( { children } ) => {
    const [starships, setStarships] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [pages, setPages] = useState(0);
    const [actualPage, setActualPage] = useState(1);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [nau, setNau] = useState({});
    const [urlShip, setUrlShip] = useState("");



    useEffect(() => {
        Axios.get('https://swapi.dev/api/starships/')
            .then(response => {
                if (response.status === 200){
                    const { results } = response.data
                    console.log(response.data)
                    setStarships(results);
                    setTotalResults(response.data.count);
                    (response.data.count % 10) ? setPages(Math.trunc(response.data.count / 10) + 1) : setPages(response.data.count / 10);
                    setPrevPage(response.data.previous);
                    setNextPage(response.data.next);
                }
            })
    }, []);

    const gotopage = (page) => {
        Axios.get(page)
        .then(response => {
            if (response.status === 200){
                const { results } = response.data
                // console.log(response.data)
                setStarships(results);
                setPrevPage(response.data.previous);
                setNextPage(response.data.next);
            }
        })
    }

    
    const getShip = (url) => {
          Axios.get(`${url}`)
        .then(response => {
            if (response.status === 200){
                const { results } = response.data
                 console.log(response.data)
                setNau(results)
            }
        })
    }
    
    

    return (
        <StarshipsContext.Provider value={{
            starships,
            setUrlShip,
            setNau,
            urlShip,
            totalResults,
            pages,
            actualPage,
            prevPage,
            nextPage,
            gotopage,
            getShip,
            nau
        }}>
            {children}
        </StarshipsContext.Provider>
    )
}