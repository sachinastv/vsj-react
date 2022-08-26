import VsjForm from './components/VsjForm';
import Weather from './components/Weather';
import About from './components/About';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
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
       <Router>
           <div className="App">
           <ul>
    
      <li>
        <Link to="/about">About Us</Link>
      </li>
    
    </ul>
    <Routes>
                 
                 <Route exact path='/about' element={< About />}></Route>
                 
          </Routes>
           </div>
       </Router>
   );
  
}

export default App;