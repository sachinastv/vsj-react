import logo from "./logo.svg";
import "./App.css";
import LineChart from "./components/LineChart";
function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [1, 2, 3, 4, 5, 6],
    title:"My Line"
  };
  return (
    <div className="App">
      <LineChart data={data} />
    </div>
  );
}

export default App;
