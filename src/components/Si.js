import React, { useState } from 'react';
import './si.css';
const Si = (props) => {

    const [p, setP] = useState(0);
    const [r, setR] = useState(0);
    const [t, setT] = useState(0);

    const pChangeHandler = (event) => {

        console.log("P Changed");
        console.log(event.target.value);
        setP(Number(event.target.value));

    };

    const rChangeHandler = (event) => {

        console.log("R Changed");
        console.log(event.target.value);
        setR(Number(event.target.value));

    };


    const tChangeHandler = (event) => {

        console.log("T Changed");
        console.log(event.target.value);
        setT(Number(event.target.value));

    };




    return (
        <div>
            <h3>Simple Interest</h3>
            <input type="number" onChange={pChangeHandler} />
            <input type="number" onChange={rChangeHandler} />
            <input type="number" onChange={tChangeHandler} />
            <h2>P={p} ,R= {r} ,T= {t},Si={(p * r * t) / 100}</h2>

        </div>
    );

};
export default Si;