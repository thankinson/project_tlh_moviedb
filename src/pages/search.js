import { useState } from "react";
const { REACT_APP_API_KEY } = process.env

export const SearchApi = () =>{
    const [movie, setMovie ] = useState()
    const [search, setSearch] = useState()
    
    const MovieApi = async () =>{
        try {     
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${search}`);
            const data = await response.json();
            console.log(data)
            setMovie(data)
            } catch(errorLog){
                console.log(errorLog)
            }
        }
        

        const submitHandler = (e) => {
            e.preventDefault();
            MovieApi()
        }

    return(
        <>
        <div>
            {!movie &&<form onSubmit={submitHandler }>
                <input placeholder="Search Movie Api" type="search" onChange={(e)=> setSearch(e.target.value)} />
                <button>Search DB</button>
            </form>}
            <div>
            {movie && <h1>{movie.original_title}</h1>}
            </div>
        </div>
        </>

    )
}
