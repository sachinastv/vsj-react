import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HelloEffect.css";

function HelloEffect() {
  const [people, setPeople] = useState(1);
  const baseURL = `https://swapi.py4e.com/api/people/${people}`;
  const [star, setStar] = useState(null);
  const [films, setFilms] = useState(null);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response.data.films);
        setStar(response.data);
        setFilms(response.data.films);
      })
      .catch((error) => {
        setStar({ name: "", mass: "" });
        setFilms(["No Data"]);
        //setError(error);
      });
  }, [baseURL]);

  return (
    <div>
      <center>
        Center{films.length}
        {films.map((current) => {
          return (
            <ul className="liwidth" key={current}>
              <li>
                {" "}
                <a target={"_blank"} href={current}>
                  {current}
                </a>
              </li>
            </ul>
          );
        })}
      </center>
    </div>
  );
}

export default HelloEffect;
