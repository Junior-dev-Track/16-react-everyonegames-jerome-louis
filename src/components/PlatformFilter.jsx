import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlatformFilter = () => {
    const [platforms, setPlatforms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const fetchPlatforms = async () => {
            try {
                const response = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
                setPlatforms(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error('Error fetching platforms:', error);
            }
        };

        fetchPlatforms();
    }, []);

    const handleFilterChange = (event) => {
        const selectedId = event.target.value;
        if (selectedId === "all") {
            navigate(`/?`);
        } else {
            navigate(`/?platforms=${encodeURIComponent(selectedId)}`);
        }
    };

    return (
        <select className="filter-button" onChange={handleFilterChange}>
            <option disabled selected>Filter by platform</option>
            <option value="all">All Platforms</option>
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
