import React from 'react'
import { useState, useEffect } from "react";
 

function EffectTest() {
    const [one, setOne] = useState(1);
    const [two, setTwo] = useState(0);
    useEffect(() => {
        setTwo(2*one);
    }, [one]);
    const oneChangeHandler = (event) => {
        setOne(Number(event.target.value))
    }
    return <div className='effectdiv'>
        <center>
            <h3>from useState {one}</h3>
            <h3>from useEffect {two}</h3>
            <input value={one} type="number" onChange={oneChangeHandler} />
        </center>
    </div>;
}


export default EffectTest;