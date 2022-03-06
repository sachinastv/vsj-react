import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';




//

function App(props) {


  const [movies, setMovies] = useState([{ title: "",characters:[] }]);
  async function getMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setMovies(data.results);

  }
  useEffect(() => {
    getMoviesHandler();

  });
  return (
    <div className="App">
      <button onClick={getMoviesHandler}>Click</button>
      <h2>Star Wars API {movies.length}</h2>

      <table>
        <tr><th>People</th><th>Movie</th></tr>
        {movies.map((movie, index) => (
          <tr><td>
            <table>
              {movie.characters.map((character, key) => (
                <tr><td>{character}</td></tr>
              ))}
            </table>

          </td><td>{movie.title}</td></tr>


        ))}
      </table>

    </div>
  );
}

export default App;