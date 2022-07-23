 import React, { useState } from 'react';



function Shakti(){
    const[weather,setWeather]= useState([{name: "",main:[]}]);
    const[mn,setMain]= useState([{main:[]}]);
    async function getWeatherHandler(){
        const city="";
    const appid="4a1f8a61b74546825af1e0be106e797b";
    const response = await fetch("https://api.openweathermap.org/ data/2.5/weather?q=" + city + "&appid=" + appid + "&units=metric");
    console.log(response);
    const data=await response.json();
    console.log(data);
    setWeather(data);
    setMain(data.main);
    }
    
    return (
       
        <div className="Shakti">
            
          <button className='btn'>Search</button>
          
            <h2>weather {weather.name}</h2> 
      <h2>weather {mn.temp}</h2> 
        </div>
        
      );
      
    }
    
    export default Shakti;
