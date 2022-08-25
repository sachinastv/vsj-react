import React from 'react'
import { useState } from 'react'

import axios from 'axios'

function Weather() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const apiKey = "4a1f8a61b74546825af1e0be106e797b";

    const apiCall = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            currenticon: "https://openweathermap.org/img/w/" + res.data.weather[0].icon + ".png",
            description: res.data.weather[0].description,
            temperature: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
        })

        setCity(res.data.name)

    }



    const Weatherdetails = () => {
        return <div>
            <div>
                Weather information for {city}
                <hr></hr>
            </div>
            <div>
                <div>
                    Weather : {weather.description}
                </div>
                <div>
                    Temperature : {weather.temperature}
                </div>
                <div>
                    Humidity :{weather.humidity}
                </div>
                <div>
                    Pressure :  {weather.pressure}
                </div>
                <div>
                    Icon : <img src= {weather.currenticon} />
                </div>
            </div>
        </div>
    }
    return (<>
        <div>Weather Info</div>
        <div>
            <div>
                <form onSubmit={apiCall}>
                    <input type="text" placeholder="city" name="city" />
                    <input type="submit" value="Submit" />
                </form>

                {weather && <Weatherdetails />}

            </div>
        </div>
    </>
    )
}

export default Weather;