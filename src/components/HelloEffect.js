import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

function HelloEffect() {
    const baseURL = "https://swapi.py4e.com/api/people/1/";


    const [star, setStar] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setStar(response.data);
        });
    }, []);

    if (!star) return <h1>No Data</h1>;
    return <div>
        <p>{star.name}</p>
        <p>{star.mass}</p></div>;
}


export default HelloEffect;