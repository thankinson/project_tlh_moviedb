import { useState } from "react";
import { SearchApi } from "./search";
import { MoviesList } from "./listMovies";

export const Landing = () => {
    const [bool, setBool] = useState(false)
    const [search, setSearch] = useState(false)
    const [showList, setShowList] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setBool(bool)
    }

    return(

        <>
            <div>
                <form onSubmit={submitHandler}>
                    {!bool &&<div><button onClick={()=> setSearch(search) }>Search DB</button> </div>}
                    {!bool &&<div><button onClick={()=> setShowList(showList)} >Display DB</button></div>}
                </form>
                {search && <SearchApi />}
                {showList && <MoviesList />}
            </div>
        </>

    )

}