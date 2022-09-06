import React, { useState } from 'react';
import './si.css';
const Si = (props) => {
    const [
        prt, setPRT] = useState({
            p: 0,
            r: 0,
            t: 0,



        });
    const setP = (event) => {
        setPRT((prevState) => {
            return { ...prevState, p: Number(event.target.value) };

        });
        console.log("Object Changed");

    };
    const setR = (event) => {
        setPRT((prevState) => {
            return { ...prevState, r: Number(event.target.value) };

        });
        console.log("Object Changed");

    };
    const setT = (event) => {
        setPRT((prevState) => {
            return { ...prevState, t: Number(event.target.value) };

        });
        console.log("Object Changed");

    };




    return (
        <div>
            <h3>Simple Interest</h3>
            P <input type="number" onChange={setP} />
            <br></br>
            R  <input type="number" onChange={setR} />
            <br></br>
            T  <input type="number" onChange={setT} />

            <h2>{prt.p * prt.r * prt.t / 100}</h2>

        </div>
    );

};
export default Si;