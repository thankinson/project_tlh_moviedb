import { React, useState} from "react";
import Collapse from "react-css-collapse";
// utils
import { addMovie } from "../utils";

// css
import styled from "styled-components";
import "../globalStyles/global.css";

const dbConnection = process.env.REACT_APP_REST_API

export const Movieresults = ({movie, checkMovie, setCheckMovie}) =>{
    const [openItemIndex, setOpenItemIndex] = useState(undefined);
    const [idArray, setIdArray] = useState([])
 
    const [film, setFilm] = useState({
        id: '',
        title: '',
        poster: ''});

        const MyCollection = async () => {
            try {     
                const response = await fetch(`${dbConnection}movie`);
                const data = await response.json();
                console.log(data.allMovie);
                setCheckMovie(data.allMovie);
                } catch(errorLog){
                    console.log(errorLog);
                };       
            };

        const CheckArray = () =>{
            for ( let i = 0; i < checkMovie.length; i++ ){
                setIdArray(idArray => [...idArray, checkMovie[i].tmdbId]);
            };        
            };
        
        const submitHandler =  async (e) => {
            e.preventDefault();
            await addMovie(film)
            MyCollection()
        };

        function toggle(id) {
            setOpenItemIndex(openItemIndex === id ? undefined : id);
            CheckArray()
          };
  
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
                            <Form onSubmit={submitHandler}>
                                    {idArray.includes(JSON.stringify(movie.id)) 
                                        ? <InDbPara><p>Already in colection</p></InDbPara>
                                        : <ButtonAdd onClick={()=> 
                                        setFilm({id: movie.id,
                                                title: movie.original_title, 
                                                poster: movie.poster_path})
                                                }>
                                        Add to Collection
                                        </ButtonAdd>
                            }
                            </Form>
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
    };
`;
const MovieDropdownButton = styled.button`
      transition: all 0.5s ease-in-out;
        width: 100%;
        padding: 20px;
        font-size: 1em;
        color: #ffffff;
        text-align: left;
        border: 0px solid #2e444e;
        border-bottom: 1px solid #223239;       
        cursor: pointer;
        background-color: #222831;

  @media screen and (max-width: 1000px) {
    font-size: 0.9em;
    max-height: 5em;
  };

  &:hover {
    color: white;
    background-color: #5a7077;
    transition: 200ms;
  };
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
    };
    
`;
const PosterDiv = styled.div`
    @media (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    };
`;
const MovieInfoDiv = styled.div`
margin-left: 20px;
font-size: 1.5em;

    @media (max-width: 700px){
        text-align: center;
        width: 100%;
    };
`;
const ImgPoster = styled.img`
    max-width: 300px;

    @media (max-width: 700px){
        max-width: 200px;
    };
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (max-width: 700px) {
        width: 100%;
    };
`
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 20%;
`;
const ButtonAdd = styled.button`
width: 200px;
height: 50px;
color: white;
border: 1px solid #536e94;
box-shadow: 1px 1px 5px 1px black;
background-color: #232933;
border-radius: 2px;
cursor: pointer;
&:hover{
    background-color: #7fa3d4;
};
    @media (max-width: 700px){
        width: 100%;
    };
`;
const InDbPara = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px #485c77 solid;
    width: 90%;
    height: 50px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px black;
    background-color: #222831;
`;
const OverviewPara = styled.p`
    @media (max-width: 700px){
   display: none;
    };
`;