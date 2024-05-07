/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const AboutGenre = ({ categoryId }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/genres/${categoryId}?key=${import.meta.env.VITE_API_KEY}`)
       .then(response => response.json())
       .then(data => {
            setData(data);
        })
       .catch(error => console.error('Error fetching data:', error));
    }, [categoryId]);

    return (
        <>
        <div className="genres">
            <img src={data.image_background} alt="category image" />
            <h2>{data.name} Games</h2>
            {data.description}
        </div>
        </>
    );
};

export default AboutGenre;
