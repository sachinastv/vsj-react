import VsjForm from './components/VsjForm';
import Weather from './components/Weather';
import About from './components/About';
import VsjLocalStorage from './components/VsjLocalStorage';
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
        <VsjLocalStorage/>
           </div>
       
       
   );
  
}

export default App;