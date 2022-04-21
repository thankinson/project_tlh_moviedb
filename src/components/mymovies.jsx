import { React, useEffect, useState } from "react";
// Styled componants
import styled from "styled-components";
const dbConnection = process.env.REACT_APP_REST_API

export const ListAll = () =>{
    const [list, setList] = useState();
    
    useEffect(()=> {
        const listMovie = async () => {
            try {     
                const response = await fetch(`${dbConnection}movie`);
                const data = await response.json();
                setList(data.allMovie)
                } catch(errorLog){
                    console.log(errorLog)
                }
        };
        listMovie();
    }, [])

    return (
        <>
            {list && list.map((list, index) => <PosterDiv key={index}><ImgPoster src={`https://image.tmdb.org/t/p/w200${list.poster}`} alt={`${list.title} Poster`} /></PosterDiv>)}
        </>
    )

};

const PosterDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2vh;
`;
const ImgPoster = styled.img`
    max-width: 250px;
  
    @media (max-width: 700px){
        max-width: 125px;
    };
`;