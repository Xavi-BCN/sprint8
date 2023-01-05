//Deps
import { useContext } from "react";

//Context
import { StarshipsContext } from "../context/StarshipsContext";

export const Pagination = () => {
    const { actualPage, pages, nextPage, prevPage, gotopage, totalResults } = useContext(StarshipsContext)

    return (
        <div className="container text-light w-50">
            <div className="col-3 d-flex align-items-center">
                Total results: {totalResults}
            </div>

            <div className="col-3 d-flex align-items-center">
                Page {actualPage} of {pages}:
            </div>

            <div className="col-3 d-flex align-items-center">
                {prevPage && <button onClick={() => gotopage(prevPage)} className="btn btn-success mx-2 ">Prev</button>}
                {nextPage && <button onClick={() => gotopage(nextPage)} className="btn btn-success">Next</button>}
            </div>
        </div>
    );
}