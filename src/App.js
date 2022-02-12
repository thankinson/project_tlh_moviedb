import './App.css';
import movieIcon from './images/Movie_Icon.png'

const App = () => {
 return (
   <div id="div-container">

              <div id="div-header">
                <img src={movieIcon} id="mov-icon" alt='mov-icon'/>
                  <h1>Home Movie Database</h1>
                <img src={movieIcon} id="mov-icon" alt='mov-icon'/>
              </div>


              <div id="div-content">
                <SearchDb />

              </div>


              <div id="div-footer">
                  <h4> Personal Project || Tom Hankinson </h4>
              </div>




   </div>
 )
  
 
 
}


const SearchDb = () =>{
  return (
    <div id="div-search">
      <div id="project-info">
          <p>The idea behind this project is to create a personal movie database of the films I own on DVD and Blu-ray.</p>
          <p>The main reason for this is that I have a large collection and don’t want to buy multiple copies (again!)</p>
          <p>The other reason for this is a portfolio project to show off how i use HTML, CSS, JavaScript, React and databases.</p>
      </div>
      <div> 
          <p>Find a film</p>
          <input id="dbSearch" placeholder='Search Database'/>
      </div>
    </div>
  );
};



export default App;
