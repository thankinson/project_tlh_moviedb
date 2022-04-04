import { useEffect, useState } from "react";
// Styled componants
import styled from "styled-components";
const dbConnection = process.env.REACT_APP_REST_API

export const ListAll = () =>{
    const [list, setList] = useState()
    
    const listMovie = async () => {
        try {     
            const response = await fetch(`${dbConnection}movie`);
            const data = await response.json();
            console.log(data)
            setList(data.allMovie)
            } catch(errorLog){
                console.log(errorLog)
            }
    };

    useEffect(async () => {await listMovie();}, []);

    return (
        <>
            {list && list.map((key, index) => <PosterDiv><ImgPoster src={`https://image.tmdb.org/t/p/w200${list[index].poster}`} alt={`${list[index].title} Poster`} /></PosterDiv>)}
        </>
    )

}

const PosterDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2vh;
    /* justify-content: center;
    align-items: center; */
`

const ImgPoster = styled.img`
    max-width: 250px;
`