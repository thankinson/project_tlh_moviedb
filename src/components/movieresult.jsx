import { useState} from "react";
import { addMovie } from "../utils";
import Collapsible from "react-collapsible";
import styled from "styled-components";

import "../globalStyles/global.css"

export const Movieresults = ({movie, checkMovie}) =>{

    const [film, setFilm] = useState({
        id: '',
        title: '',
        poster: ''})
  
        const submitHandler = (e) => {
            e.preventDefault();
            console.log(film);
            addMovie(film)

        }

        // const checkArrys = () =>{

        //     for (let i = 0; i < checkMovie.length; i++){
        //         for (let x = 0; x < movie.length; x++){
        //             if (checkMovie[i].tmdbId == movie[x].id){
        //                 console.log(`${i} and ${x} num. Test num is ${checkMovie[i].tmdbId}. Movie Num is ${movie[x].id}`)
        //             }
        //         }
        //     }
        // }
    
        // checkArrys()

        // const CheckArray = (dbMovie, apiMovie) => {
        // let isIn = dbMovie.includes(apiMovie)
        // console.log("API MOVIESS" + apiMovie)
        // console.log( isIn)
        // }


    return(
        <>

        <DivResults>
        {movie && movie.map((movie, index) => 
            <DivCollapse key={index}>
                <Collapsible trigger={movie.original_title}>
                    <DivContent>
                        <DivPoster>
                            <ImgPoster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.original_title} Poster`} />
                        </DivPoster>
                        <form onSubmit={submitHandler}>
                        <DivInformation>
                            <p>Movie ID: {movie.id}</p>
                            <p>Released: {movie.release_date}</p>
                            <p>Synopsis:</p>
                            <p>{movie.overview}</p>
                            <p>Raiting: {movie.vote_average}</p>
                              {/* trying to get this to check db on each map. with no success */}
                              {/* this returns fales on all */}

                            {/* this returns true on all */}
                            {/* {<CheckArray dbMovie={checkMovie} apiMovie={movie[index].id} /> ? <p>Movie in Database</p> : <p>Movie not in database</p>}  */}
                            {/* {console.log(checkMovie.includes(movie[index].id))}
                            {console.log(movie[index].id)} */}
                            <ButtonDiv>
                                    {/* <ButtonAdd onClick={()=> setFilm({id: movie[index].id,title: movie[index].original_title, poster: movie[index].poster_path})}>Add to Collection</ButtonAdd> */}
                                    {(checkMovie.includes(movie.id)) ? <p>Movie in Database</p> : <ButtonAdd onClick={()=> setFilm({id: movie.id,title: movie.original_title, poster: movie.poster_path})}>Add to Collection</ButtonAdd>} 
                                    {/* {(checkMovie.find(i => i == movie.id)) ? <p>Movie in Database</p> : <ButtonAdd onClick={()=> setFilm({id: movie.id,title: movie.original_title, poster: movie.poster_path})}>Add to Collection</ButtonAdd>}  */}
                                </ButtonDiv>
                       
                        </DivInformation>
                        </form>
                    </DivContent>                 
                </Collapsible>
            </DivCollapse>)}
        </DivResults>
        
        </>

    )
};

const DivResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-color: #131516;
    /* border: solid 1px red; */
`
const DivCollapse = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    margin-top: 1vh;
    margin-left: 1vw;
    margin-bottom: 1vh;
    background-color: #222831;
    box-shadow: 0px 0px 2px 1px white;
`
const DivContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: 1vw;
    margin-bottom: 1vh;
`
const DivPoster = styled.div`
    height: 450px;
    width: 300px;
`
const ImgPoster = styled.img`
    max-width: 300px;
`
const DivInformation = styled.div`
    width: 30vw;
    padding-left: 1vw;
    font-size: 20px;

`
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const ButtonAdd = styled.button`
    width: 200px;
    height: 50px;
`


// the chopping block

                                // {/* {movie &&(() => {for (let i = 0; i < checkMovie.length; i++){
                                //         if (movie.includes(checkMovie[i].tmdbId)){
                                //             console.log("Movie found")
                                //             return <p>in database</p>
                                //         } else {
                                //             return <p>Not in database</p>
                                //         }
                                //     }})} */}
                                // {/* {checkMovie && movie.includes(checkMovie[index].tmdbid)} */}

                                // {!movie.includes(checkMovie.tmdbid) && (<p>movie in database</p>)}
                                        // const myCollection = async () => {
                                //     try {     
                                //         const response = await fetch(`${dbConnection}movie`);
                                //         const data = await response.json();
                                //         console.log(data.allMovie)
                                //         setCheckMovie(data.allMovie)
                                //         } catch(errorLog){
                                //             console.log(errorLog);
                                //         }
                                
                                // };

                                // useEffect( () => {myCollection();}, []);

                                // {(() => {
                                //     let movieApi = movie[index].id
                                //     for (let i = 0; i < checkMovie.length; i++ ){
                                //         if (movieApi.includes(checkMovie[i].tmdbid)){
                                //             return <p>Already in database</p>
                                //         } else {

                                // const MovieCheck = () => {
                                //     if(
                                //         checkMovie.map((a) => a.tmdbid).find((element) => element == movie.id) == undefined){}
                                // }

                                // const Moviecheck = () => {
                                //     for (let i = 0; i < checkMovie.length; i++ ){
                                //     if (movie.includes(checkMovie[i].tmdbid)){
                                //         return <p>in database</p>
                                //     } else {
                                //         return <p>not in database</p>
                                //     }}
                                // }

                                // const CheckMovie = (movie, checkMovie) => {
                                //     for (let i = 0; i < checkMovie.length; i++){
                                //         for (let x = 0; x < movie.length; x++) {
                                //             if(checkMovie[i].tmdbid == movie[x].id){
                                //                 return <p>Movie In Database</p>
                                //             } else {
                                //                 return <p>not in db</p>
                                //             }
                                //         }
                                //     }
                                // }

                                // const checkArrays = () => {
                                //     for (let i = 0; i < movie.length; i++){
                                //         for(let j = 0; j < test.length; j++){
                                //         if (test[i].tmdbId === movie[i].id){
                                //             // console.log(`${i}, DP num ${test[i].tmdbId} MATCHS Movie num ${movie[i].id}`)
                                //             }  
                                //             }
                                //         }
                                    
                                // }
                                // {!movie[index].id.includes(checkMovie) && <ButtonDiv>
                                //     <ButtonAdd onClick={()=> setFilm({id: movie[index].id,title: movie[index].original_title, poster: movie[index].poster_path})}>Add to Collection</ButtonAdd>
                                // </ButtonDiv>}
                                // const CheckDb = ({inDb, inApi}) => {
                                //     if (inDb.includes(inApi)) {
                                //         return "(<p> in db</p>)"
                                
                                //     }
                                // }
