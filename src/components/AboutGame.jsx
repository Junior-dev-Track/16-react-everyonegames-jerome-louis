/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const AboutGame = ({ gameId }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_API_KEY}`)
       .then(response => response.json())
       .then(data => {
            setData(data);
        })
       .catch(error => console.error('Error fetching data:', error));
    }, [gameId]);


    return (
        <div className="games">
            <div className="text">
            <h2>{data.name}</h2>
            <p></p>
            </div>
        </div>
    );
};

export default AboutGame;
