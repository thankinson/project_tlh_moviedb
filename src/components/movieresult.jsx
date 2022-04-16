import { React, useState} from "react";
// import Collapsible from "react-collapsible";
import Collapse from "react-css-collapse";
// utils
import { addMovie } from "../utils";

// css
import styled from "styled-components";
import "../globalStyles/global.css"

export const Movieresults = ({movie, idArray}) =>{
    const [openItemIndex, setOpenItemIndex] = useState(undefined);

    const [film, setFilm] = useState({
        id: '',
        title: '',
        poster: ''})
 
        const submitHandler = (e) => {
            e.preventDefault();
            console.log(film);
            addMovie(film)
        }

        function toggle(id) {
            setOpenItemIndex(openItemIndex === id ? undefined : id);
          }
  
    return(
        <>
            <PageContainerDiv>
            <MovieList>
                {movie && movie.map((movie, index) => 
                    <li key={index}>
                        <MovieDropdownButton type="button" onClick={()=> toggle(movie)}>{movie.original_title}</MovieDropdownButton>
                        <C isOpen={openItemIndex === movie}>
                            <ContentDiv>
                                <PosterDiv>
                                    <ImgPoster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.original_title} Poster`} />
                                </PosterDiv>
                                <MovieInfoDiv>
                                    <p>{movie.original_title}</p>
                                    <p>{movie.release_date}</p>
                                    <OverviewPara>{movie.overview}</OverviewPara>
                                        <ButtonDiv>
                                        <form onSubmit={submitHandler}>
                                                {idArray.includes(JSON.stringify(movie.id)) 
                                                    ? <InDbPara><p>In Database</p></InDbPara>
                                                    : <ButtonAdd onClick={()=> 
                                                            setFilm({id: movie.id,
                                                                    title: movie.original_title, 
                                                                    poster: movie.poster_path})
                                                                    }>
                                                                Add to Collection
                                                        </ButtonAdd>
                                        }
                                            </form>
                                        </ButtonDiv>
                                </MovieInfoDiv>
                            </ContentDiv>
                        </C>
                    </li>
                )}

            </MovieList>
            </PageContainerDiv>
        
        </>

    )
};

const PageContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;
const MovieList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 50vw;
    list-style: none;
    padding: 0;

    @media (max-width: 700px){
        width: 90%;
    }
   
`;
const MovieDropdownButton = styled.button`
      transition: all 0.5s ease-in-out;
        width: 100%;
        padding: 20px;
        font-size: 1em;
        color: #c8c8c8;
        text-align: left;
        border: 0px solid #2e444e;
        border-bottom: 1px solid #223239;       
        cursor: pointer;
        background-color: #222831;

  @media screen and (max-width: 1000px) {
    font-size: 0.9em;
    max-height: 5em;
  }

  &:hover {
    color: white;
    background-color: #5a7077;
    transition: 200ms;
  }
`;
const C = styled(Collapse)`
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    padding: 20px;
    font-size: 0.9em;
    color: #2e444e;
    background-color: #2c3543;

    @media (max-width: 700px){
        flex-wrap: wrap;
    }
    
`;
const PosterDiv = styled.div`
    @media (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;
const MovieInfoDiv = styled.div`
margin-left: 20px;
font-size: 1.5em;

    @media (max-width: 700px){
        text-align: center;
        width: 100%;
    }
`;
const ImgPoster = styled.img`
    max-width: 300px;

    @media (max-width: 700px){
        max-width: 200px;
    }
`;
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
const ButtonAdd = styled.button`
    width: 200px;
    height: 50px;
`;
const InDbPara = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px #016527 solid;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    background-color: #323634;
`;

const OverviewPara = styled.p`
    @media (max-width: 700px){
   display: none;
    }
`