import React from 'react'
import { useState, useEffect } from "react";


function HelloEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
  
    return <h1>{count}</h1>;
    }


export default HelloEffect;