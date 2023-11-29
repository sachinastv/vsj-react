import React, { useState, useEffect } from "react"; // Importing React hooks and useEffect from react package
const App = () => {
  // Functional component named App
  const f = window.f;
  return (
    <div className="app-container">
      <input type="button" onClick={f} value={"Hi"}></input>
      <h1 onClick={f}>Varanasi Software Junction</h1>
    </div>
  );
};

export default App;
