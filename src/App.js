import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';




//

function App(props) {


  const [weather, setWeather] = useState([{ name: "",main:[]}]);
  const [mn, setMain] = useState([{ main:[]}]);
  async function getWeatherHandler() {
    const city="jaunpur";
    const appid="4a1f8a61b74546825af1e0be106e797b";
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appid + "&units=metric");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setWeather(data);
    setMain(data.main);

  }
  useEffect(() => {
    //getWeatherHandler();

  });
  return (
    <div className="App">
      <button onClick={getWeatherHandler}>Click</button>
      <h2>weather {weather.name}</h2>
      <h2>weather {mn.temp}</h2>

          


      
    </div>
  );
}

export default App;