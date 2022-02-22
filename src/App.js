import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import VsjA from './components/VsjA';
import VsjB from './components/VsjB';


//

function App(props) {
  const[mydata,setMyData]=useState(0);
  const saveData=(n1)=>{
    
    const data={...n1};
    console.log("App");
    
    setMyData(n1);
    console.log(mydata);
  };
  return (
    <div className="App">
      <h2>from VsjA {mydata}</h2>
      <VsjA onSaveData={saveData}/>
     <VsjB n1={mydata}></VsjB>
     
    </div>
  );
}

export default App;