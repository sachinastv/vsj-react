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

    const submitHandler=(event)=>
	{
		event.preventDefault();
		console.log("Submitted");
        console.log(amt1 + amt2);

	};

    return <form onSubmit={submitHandler}>
        <label>Amount</label>
        <input type="text" onChange={amountChangeHandler1} />
        <input type="text" onChange={amountChangeHandler2} />
        <h1>{amt1}</h1>
        <h1>{amt2}</h1>
        <h1>{Number(amt1) + Number(amt2)}</h1>
        <input type="submit" value="Submit"/>
    </form>
}
export default VsjForm; 