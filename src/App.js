import VsjForm from './components/VsjForm';
import Weather from './components/Weather';
import About from './components/About';
import MapUse from './components/MapUse';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import './App.css';




//

function App() {
  
    return (
      
       <div>
        <MapUse data={[1,2,3,4]}/>
           </div>
       
       
   );
  
}

export default App;