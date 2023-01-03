import React from 'react'
import { useState, useEffect } from "react";
import './EffectTest.css';

function EffectTest() {
    const [one, setOne] = useState("One");
    const [two, setTwo] = useState("Two");
    useEffect(() => {
        setTwo(one);
    }, [one]);
    const oneChangeHandler = (event) => {
        setOne(event.target.value)
    }
    return <div className='effectdiv'>
        <center>
            <h3>One {one}</h3>
            <h3>Two {two}</h3>
            <input type="text" onChange={oneChangeHandler} />
        </center>
    </div>;
}


export default EffectTest;