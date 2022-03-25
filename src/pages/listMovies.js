import { ListAll } from "../components/mymovies";
import { useState } from "react";
const dbConnection = process.env.REACT_APP_REST_API

export const MoviesList = () => {
const [list, setList] = useState([])

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

const submitHandler = (e) => {
    e.preventDefault();
    listMovie()
};

    return (
        
          <>  
            <form onSubmit={ submitHandler }>
                <button>cleck here</button>
            </form>
            <ListAll list={list}/>
          </>
      

    )

}