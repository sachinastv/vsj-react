import React,{useState} from 'react';
const StateUp=(props)=>


{
const[data,setData]=useState('');

const dataChangeHandler=(event)=>
{
console.log("Data Changed");
console.log(event.target.value);
setData(event.target.value);
props.onSaveData(event.target.value);
}


return<div>
    <h2>Inside StateUp {data}</h2>
StateUp<textarea  onChange={dataChangeHandler}></textarea>
</div>
}
export default StateUp;