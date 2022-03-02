import SearchDb from "./functions/Searchbar";

const Content = () =>{
    return (
    
        <div id="div-content">
                  <div id="div-search">
        <div id="project-info">
            <p>The idea behind this project is to create a personal movie database of the films I own on DVD and Blu-ray.</p>
            <p>The main reason for this is that I have a large collection and don’t want to buy multiple copies (again!)</p>
            <p>The other reason for this is a portfolio project to show off how i use HTML, CSS, JavaScript, React and databases.</p>
        </div>
        <div> 
            <p>Find a film</p>
            <SearchDb />
        </div>
      </div>
        
        </div>

    )
}



export default Content;