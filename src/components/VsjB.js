import React,{useState} from 'react';
const VsjB=(props)=>


{
const[n1,setN1]=useState(0);

const n1ChangeHandler=(event)=>
{
//console.log("N1 Changed");
//console.log(event.target.value);
setN1(Number(event.target.value));
props.onSaveData(event.target.value);
}


return<div>
    <h2>{props.n1}</h2>
VsjB<input type="number" value={props.n1} onChange={n1ChangeHandler}/>
</div>
}
export default VsjB;