import { useState, useEffect } from "react";
import Card from './Card';
import { v4 as uuid } from "uuid";

const Games = () => {
    // state
    const [data, setData] = useState([]);

    // effect
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
        .then(response => response.json())
        .then(data => setData(data.results))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="games">
            <h1>Games</h1>
            <ul>
                {data.map((game) => (
                    <Card key={uuid()} gameName={game}/>
                ))}
            </ul>
        </div>
    );
};

export default Games;
