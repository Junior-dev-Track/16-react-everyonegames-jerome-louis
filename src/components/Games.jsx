import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Games = () => {
    // state
    const [data, setData] = useState([]);

    //behaviour


    // effect
    useEffect(()=>{
        const response = axios.get(`${process.env.VITE_API_URL}/endpoint`, {
            params: {
              api_key: process.env.VITE_API_KEY
            }
          });
          setData(response.data);
    }, [])


    return (
        <div className="games">
            <h1>Games</h1>
            <ul>
                {
                    data.map((game)=> <li>{game.results.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Games;