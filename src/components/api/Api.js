import {react, useState } from "react";

const MovieApi = async () =>{
    try {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${marsRover}/photos?sol=${marsSol}&api_key=${REACT_APP_API_KEY}`);
    const marsData = await response.json();
    console.log(marsData)
    setMars(marsData)
    // setMarsImg(marsImg.img_src)
} 
    // catch the error 
    catch(errorLog){
        console.log(errorLog)
        setErrorLog({error: true, message: errorLog.message})
   }
};
// useEffect(()=>{
//     // console.log(mars)
//     MarsCollect()
// }, [])