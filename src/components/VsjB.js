import React,{useState} from 'react';
const VsjB=()=>


{
const[n2,setN2]=useState(0);


const n2ChangeHandler=(event)=>
{
console.log("N2 Changed");
console.log(event.target.value);
setN2(Number(event.target.value));
}

return<div>
VsjB<h2>{n2}</h2>
<input type="number" onChange={n2ChangeHandler}/>
</div>
}
export default VsjB;