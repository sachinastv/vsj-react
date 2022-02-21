import logo from './logo.svg';
import './App.css';
import VsjA from './components/VsjA';
import VsjB from './components/VsjB';

const mydata=0;
const saveData=(n1)=>{
  const data={...n1};
  console.log("App");
  console.log(data);
  mydata=data;
};
function App() {
  return (
    <div className="App">
      <VsjA onSaveData={saveData}/>
     <VsjB/>
     
    </div>
  );
}

export default App;