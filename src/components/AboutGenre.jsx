/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import reactStringReplace from 'react-string-replace';

const AboutGenre = ({ categoryId }) => {
    const [data, setData] = useState(null); // Initialize state as null

    useEffect(() => {
        fetch(`https://api.rawg.io/api/genres/${categoryId}?key=${import.meta.env.VITE_API_KEY}`)
       .then(response => response.json())
       .then(data => {
                setData(data);
            })
       .catch(error => console.error('Error fetching data:', error));
    }, [categoryId]);

    // Modify the content only if data is available
    let modifiedDescription = '';
    if (data && data.description) {
        // Replace '&#39;' with an apostrophe
        modifiedDescription = reactStringReplace(data.description, /&#39;/g, (match, i) => (
            <span key={i}>{match}</span>
        ));

        // Replace '<p>' with an empty string (or any other replacement)
        modifiedDescription = reactStringReplace(modifiedDescription, /<p>/g, (match, i) => (
            <span key={i}></span>
        ));
    }

    return (
        <div className="genres">
            <img src={data?.image_background} alt="category image" /> {/* Optional chaining */}
            <div className="text">
            <h2>{data?.name} Games</h2> {/* Optional chaining */}
            <p>{modifiedDescription}</p>
            </div>
        </div>
    );
};

export default AboutGenre;
