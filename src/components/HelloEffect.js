import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './HelloEffect.css';

function HelloEffect() {
    const baseURL = "https://swapi.py4e.com/api/people/1/";

    const [films, setFilms] = React.useState(null);
    const [star, setStar] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {

            setStar(response.data);
            setFilms(response.data.films);
        });
    }, []);

    if (!star) return <h1>No Data</h1>;
    return <div>
        <center>
            <p>{star.name}</p>
            <p>{star.mass}</p>

            <p>

                {films.map(current => {
                    return (
                        <ul className='liwidth' key={current}>
                            <li> <a target={"_blank"} href={current}>{current}</a>


                            </li>
                        </ul>
                    );
                })}





            </p>
        </center>
    </div>;
}


export default HelloEffect;