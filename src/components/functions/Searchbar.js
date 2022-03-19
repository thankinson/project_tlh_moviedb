import {react, useState} from "react";
import MovieApi from "../api/Api";

const SearchDb = () =>{
    const [movieSearch, setMovieSearch] = useState('')
    
    return <input id="dbSearch" type="text" placeholder='Search Database' onChange={(event)=> <MovieApi apiSearch={movieSearch}/>} />
};
  
export default SearchDb;

// onChange={(event)=> <MovieApi movieSearch={event.target.value} />}