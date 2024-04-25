import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Games = () => {
    // state
    const [data, setData] = useState([]);

    //behaviour


    // effect
    useEffect(()=>{
        axios.get("https://api.rawg.io/api/games?key=0db84bd7a31f4972903b6ce94a1107ba")
        .then((res)=>setData(res.data));
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