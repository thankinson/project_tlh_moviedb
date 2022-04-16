import {React, useState } from "react";

const { REACT_APP_API_KEY } = process.env

export const MovieApi = async (search) =>{
    const [movie, setMovie ] = useState()
        try {
         
            console.log(search)
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&query=${search}`);
            const movieData = await response.json();
            console.log(movieData)
            setMovie(movieData)
        } catch(errorLog){
            console.log(errorLog)
            
        }

    console.log(movie)
        return (
            <>
                <p>{movie}</p>
            </>
        )
    };

