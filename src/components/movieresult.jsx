import { useState} from "react";
import { addMovie } from "../utils";
import Collapsible from "react-collapsible";
import styled from "styled-components";


import "../globalStyles/global.css"

export const Movieresults = ({movie}) =>{

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
                            <ButtonDiv key={index}>
                                    <ButtonAdd onClick={()=> setFilm({id: movie[index].id,title: movie[index].original_title, poster: movie[index].poster_path})}>Add to Collection</ButtonAdd>
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