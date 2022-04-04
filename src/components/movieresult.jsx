import { useState } from "react";
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

    return(
        <>

        <DivResults>
        {movie && movie.map((key, index) => 
            <DivCollapse>
                <Collapsible trigger={movie[index].original_title}>
                    <DivContent>
                        <DivPoster>
                            <ImgPoster src={`https://image.tmdb.org/t/p/w300${movie[index].poster_path}`} alt={`${movie[index].original_title} Poster`} />
                        </DivPoster>
                        <form onSubmit={submitHandler}>
                        <DivInformation>
                            <p>Movie ID: {movie[index].id}</p>
                            <p>Released: {movie[index].release_date}</p>
                            <p>Synopsis:</p>
                            <p>{movie[index].overview}</p>
                            <p>Raiting: {movie[index].vote_average}</p>
                            <div>
                                <div><p>Add to collection</p></div>
                                <ButtonDiv>
                                    <ButtonAdd onClick={()=> setFilm({id: movie[index].id,title: movie[index].original_title, poster: movie[index].poster_path})}>Add to Collection</ButtonAdd>
                                </ButtonDiv>
                            </div>
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