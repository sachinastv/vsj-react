import React, { useState } from 'react';

const MapUse = (props) => {
    const numbers = props.data;
    const listItems = numbers.map((number) =>
      <li>{2*number}</li>
    );
    return (
        <div>
            <h2>List of Numbers</h2>
      <ul>{listItems}</ul>
      
      </div>
    );
  
};
export default MapUse;