import { useState, useEffect } from "react"
import styled from "styled-components";


export const TestPage =()=>{
    const [test, setTest] = useState([])
    const [movie, setMovie] = useState([])
    const search = "Star Wars"

    const dbConnection = process.env.REACT_APP_REST_API
    const { REACT_APP_API_KEY } = process.env

    const myCollection = async () => {
        try {     
            const response = await fetch(`${dbConnection}movie`);
            const data = await response.json();
            console.log(data)
            setTest(data.allMovie)
            } catch(errorLog){
                console.log(errorLog);
            }
    
    };
    
    // useEffect(() => {
    //     myCollection();
    // }, []);

    const MovieApi = async () =>{
        try {     
            const response = await fetch(`${REACT_APP_API_KEY}${search}`);
            const data = await response.json();
            console.log(data)
            setMovie(data.results)
            } catch(errorLog){
                console.log(errorLog)
            }
         };
            
    const submitHandler = (e) => {
        e.preventDefault()
        myCollection()
        MovieApi()
     
        // let dbArray = test.map((key, index) => console.log( test[index].tmdbId))
    }

    // const checkArrays = () => {
    //     for (let i = 0; i < movie.length; i++){
    //         if (test[i].tmdbId == movie[i].id){
    //             console.log(`${i}DP num ${test[i].tmdbId} MATCHS Movie num ${movie[i].id}`)
    //         } else {
    //             console.log(i)
    //         }
    //     }
    // }

    // checkArrays()

    // const checkArrys = () =>{
        
    //     for (let i = 0; i < test.length; i++){
    //         for (let x = 0; x < movie.length; x++){
    //             if (test[i].tmdbId == movie[x].id){
    //                 console.log(`${i} DB array pos and ${x} API array pos. Test num is ${test[i].tmdbId}. Movie Num is ${movie[x].id}`)
    //             }
    //         }
    //     }
    //     for (let i = 0; i < test.length; i++){
    //         if (movie.includes(test[i].tmdbId)){
    //             console.log("Movie found")
    //         } else {
    //             return "movie not found"
    //         }
    //     }
    // }

    // checkArrys()

    const checkArrys = () =>{

        for (let i = 0; i < test.length; i++){
            for (let x = 0; x < movie.length; x++){
                if (test[i].tmdbId == movie[x].id){
                    console.log(`${i} and ${x} num. Test num is ${test[i].tmdbId}. Movie Num is ${movie[x].id}`)
                }
            }
        }

    }

    checkArrys()

    // const checkArrays = () => {
    //     for (let i = 0; i < movie.length; i++){
    //         for(let j = 0; j < test.length; j++){
    //         if (test[i].tmdbId === movie[i].id){
    //             // console.log(`${i}, DP num ${test[i].tmdbId} MATCHS Movie num ${movie[i].id}`)
    //             }  
    //             }
    //         }
           
    // }
    
    // checkArrays()

    // const checkArrays = () => {
    //     for (let i = 0; i < test.length; i++){
    //        console.log(test.filter(test.id == test[i].id))
    //     }
    // }

    // checkArrays()
    

    
    return(
        <>
        <MainDiv>
        <InDB>
        <p>In db</p>
        <form onSubmit={submitHandler}>
            <button>Click</button>
        </form>
        {test &&test.map((key, index) => <Pstyle>{test[index].tmdbId}</Pstyle>)}
        </InDB>
        <Api>
            <p>API call
            </p>
        {movie &&movie.map((key, index) => <Pstyle>{movie[index].id}</Pstyle>)}
        </Api>
        </MainDiv>
        </>
        )
}

const Pstyle = styled.p`
    padding: 5px;
`
const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
    margin: 1vw;
`

const InDB = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    width: 49vw;
    border: solid 1px red;
`

const Api = styled.div`
        display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    width: 49vw;
    border: solid 1px green;
`