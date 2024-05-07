/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

const AboutGame = ({ gameId }) => {
    const [data, setData] = useState({});
    const [img, setImg] = useState([]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_API_KEY}`)
       .then(response => response.json())
       .then(data => {
            setData(data);
        })
       .catch(error => console.error('Error fetching game data:', error));
    }, [gameId]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${import.meta.env.VITE_API_KEY}`)
       .then(response => response.json())
       .then(img => {
            setImg(img.results);
        })
       .catch(error => console.error('Error fetching screenshots data:', error));
    }, [gameId]);

    return (
        <div className="games">
            <div className="text">
                <h2>{data.name}</h2>
                <p>Average playtime: {data.playtime}h <FaRegClock/></p>
                <p>{data.rating} <FaStar color="orange" fontSize="1em" /></p>
                <p>Number of reviews: {data.reviews_count} <IoPersonSharp /></p>
                <p>Metacritic score: {data.metacritic} <TbTargetArrow /></p>
            </div>
            <div className="images">
                <ul>
                {img.map((image) => {
                    return <li key={image.id}><img src={image.image} alt="" /></li>;
                })}
                </ul>
            </div>
        </div>
    );
};

export default AboutGame;
