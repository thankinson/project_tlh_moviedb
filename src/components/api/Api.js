import {react, useState } from "react";
const { REACT_APP_API_KEY } = process.env

const MovieApi = async (props) =>{
    const [movie, setMovie ] = useState('')
    const [errorLog, setErrorLog] = useState({
        error: false,
        message: ""
    })
    try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${props.apiSearch}`);
    const movieData = await response.json();
    console.log(movieData)
    setMovie(movieData)
} 
    // catch the error 
    catch(errorLog){
        console.log(errorLog)
        setErrorLog({error: true, message: errorLog.message})
   }



};


export default MovieApi;
