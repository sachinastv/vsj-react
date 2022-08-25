import VsjForm from './components/VsjForm';
import Weather from './components/Weather';
import React, { useEffect, useState } from 'react';
import './App.css';




//

function App() {
  return (
    <div className="App">
<Weather></Weather>
     <h1>Welcome to VSJ React</h1>
     <VsjForm></VsjForm>
	<Weather></Weather>
    </div>
  );
}

export default App;