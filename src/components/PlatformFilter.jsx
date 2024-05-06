import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlatformFilter = () => {
    const [platforms, setPlatforms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const API_URL = process.env.VITE_API_URL;
        const API_KEY = process.env.VITE_API_KEY;

        axios.get(`${API_URL}/platforms?key=${API_KEY}`)
            .then(response => {
                // Assuming each result might have its own platforms array, we aggregate all unique platforms
                const allPlatforms = new Map();
                response.data.results.forEach(item => {
                    item.platforms.forEach(platform => {
                        if (!allPlatforms.has(platform.id)) {
                            allPlatforms.set(platform.id, platform);
                        }
                    });
                });
                setPlatforms([...allPlatforms.values()]);
            })
            .catch(error => console.error('Error fetching platforms:', error));
    }, []);

    const handleFilterChange = (value) => {
        // Navigate, adding platform filter to the URL
        navigate(`/?platforms=${encodeURIComponent(value)}`);
    };

    return (
        <select onChange={(e) => handleFilterChange(e.target.value)}>
            {platforms.map(platform => (
                <option key={platform.id} value={platform.id}>{platform.name}</option>
            ))}
        </select>
    );
}

export default PlatformFilter;
