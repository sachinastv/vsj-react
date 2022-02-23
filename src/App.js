import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import VsjStyle from './components/VsjStyle';



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
      <h2>from VsjStyle {mydata}</h2>
      <VsjStyle onSaveData={saveData}/>
     
     
    </div>
  );
}

export default App;