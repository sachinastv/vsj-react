import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StateUp from './components/StateUp';


//

function App(props) {
  const[mydata,setMyData]=useState('');
  const saveData=(n1)=>{
    
    const data={...n1};
    console.log("App");
    
    setMyData(n1);
    console.log(mydata);
  };
  return (
    <div className="App">
      <h2>from StateUp in App js {mydata}</h2>
      <StateUp onSaveData={saveData}/>
     
     
    </div>
  );
}

export default App;