import React,{useState} from 'react';
const VsjStyle=(props)=>


{
const[textcolor,setColor]=useState('red');

const colorChangeHandler=(event)=>
{
//console.log("N1 Changed");
//console.log(event.target.value);
setColor(event.target.value);
props.onSaveData(event.target.value);
}


return<div>
    <h2 style={{color : textcolor}}>Dynamic Style</h2>
    VsjStyle<input type="text" onChange={colorChangeHandler}/>
</div>
}
export default VsjStyle;