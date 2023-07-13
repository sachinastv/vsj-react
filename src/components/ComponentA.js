import { useState, useEffect } from "react";
import axios from "axios";
let j = 0;

const ComponentA = () => {
    let baseURL = `https://gist.githubusercontent.com/champaksworldcreate/b5314c76cc15b44686c7151a8fb039b0/raw/d6020258eea665ef2929f901d88ae3d41e22ba6b/images.json`;
    const [num, setNum] = useState(1);

    const [album, setAlbum] = useState([]);
    const traverse = () => {
    
        if (j<4){
            j = j + 1;
        }
        return j+1;
  
    }
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setAlbum(response.data)
            
            

        }).catch((error) => {

            <h1>Error</h1>
        });

    },[])




    return (
        <div>
            {console.log(album[0])}

            {album.map((current) => {
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
            
        </div>
    )
}
export default ComponentA;