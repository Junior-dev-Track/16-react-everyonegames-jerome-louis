import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlatformFilter = () => {
    const [platforms, setPlatforms] = useState([]); // State to store platforms

    const handleFilterChange = (event) => {
        const selectedId = event.target.value;
        navigate(`/?platforms=${encodeURIComponent(selectedId)}`);
    };


    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY; // Ensure your API key is prefixed with VITE_
        const fetchPlatforms = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
                setPlatforms(response.data.results); // Assuming 'results' contains the list of platforms
                console.log(response.data.results); // Log to see what the API returned
            } catch (error) {
                console.error('Error fetching platforms:', error);
            }
        };

        fetchPlatforms();
    }, []);

    return (
        <select>
            {platforms.length > 0 ? (
                platforms.map((platform) => (
                    <option key={platform.id} value={platform.id}>
                        {platform.name}
                    </option>
                ))
            ) : (
                <option>Loading platforms...</option>
            )}
        </select>
    );
};



export default PlatformFilter;
