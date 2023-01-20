import logo from './logo.svg';
import './App.css';
import VsjButton from './components/VsjButton.';
import VsjGrid from './components/VsjGrid';
import VsjFullWidthGrid from './components/VsjFullWidthGrid';
import VsjSpacingGrid from './components/VsjSpacingGrid.tsx';
function App() {
  return (
    <div className="App">
      <h1>Varanasi Software Junction</h1>
      <h2>Full Width</h2>
<VsjFullWidthGrid/>
<h2>Grid</h2>
      <VsjGrid />

      <VsjSpacingGrid/>
    </div>
  );
}

export default App;
