import { useState } from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import "../globalStyles/global.css"


export const Movieresults = ({movie}) =>{


    return(
        <>

        <DivResults>
            {movie && movie.map((item, index) => 
                        <DivCollapse>
                            <Collapsible trigger={movie[index].original_title}>
                                <DivContent>
                                    <DivPoster>
                                        <ImgPoster src={`https://image.tmdb.org/t/p/w500${movie[index].poster_path}`} alt={`${movie[index].original_title} Poster`} />
                                    </DivPoster>
                                    <DivInformation>
                                        <p>Movie ID: {movie[index].id}</p>
                                        <p>Released: {movie[index].release_date}</p>
                                        <p>Synopsis:</p>
                                        <p>{movie[index].overview}</p>
                                        <p>Raiting: {movie[index].vote_average}</p>
                                    </DivInformation>
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
    box-shadow: 0px 0px 2px 1px;
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

