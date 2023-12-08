import React, { useState, useEffect } from 'react';

const SwapiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {data.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SwapiComponent;
