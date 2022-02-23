import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';




//

function App(props) {
  const [movies,setMovies]=useState([{title:""}]);
 async function getMoviesHandler()
  {
 const response=  await fetch("https://swapi.dev/api/films");
 console.log(response);
 const data=await response.json();
 console.log(data);
     setMovies( data.results);
    
  }
  
  return (
    <div className="App">
      <button onClick={getMoviesHandler}>Click</button>
      <h2>Star Wars API</h2>
     <h2>{movies[0].title}</h2>
     
    </div>
  );
}

export default App;