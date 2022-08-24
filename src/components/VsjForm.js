import React, { useState } from 'react';
const VsjForm = () => {
    const [amt1, setAmt1] = useState(0);
    const [amt2, setAmt2] = useState(0);
    const amountChangeHandler1 = (event) => {

        console.log("Amount Changed");
        console.log(event.target.value);
        setAmt1(Number(event.target.value));
    };
    const amountChangeHandler2 = (event) => {

        console.log("Amount Changed");
        console.log(event.target.value);
        setAmt2(Number(event.target.value));
    };



    return <form>
        <label>Amount</label>
        <input type="text" onChange={amountChangeHandler1} />
        <input type="text" onChange={amountChangeHandler2} />
        <h1>{amt1}</h1>
        <h1>{amt2}</h1>
        <h1>{Number(amt1) + Number(amt2)}</h1>
    </form>
}
export default VsjForm; 