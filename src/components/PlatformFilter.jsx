import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlatformFilter = () => {
    const [platforms, setPlatforms] = useState([]);
    const [selectedPlatformDetails, setSelectedPlatformDetails] = useState(null);
    const navigate = useNavigate();

    // Step 1: Fetch all platforms to populate the dropdown
    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;

        axios.get(`${API_URL}/platforms?key=${API_KEY}`)
            .then(response => {
                setPlatforms(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching platforms:', error);
            });
    }, []);

    // Function to fetch details for a specific platform
    const fetchPlatformDetails = (id) => {
        const API_URL = import.meta.env.VITE_API_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;

        axios.get(`${API_URL}/platforms/${id}?key=${API_KEY}`)
            .then(response => {
                setSelectedPlatformDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching platform details:', error);
                setSelectedPlatformDetails(null);
            });
    };

    const handleFilterChange = (event) => {
        const selectedId = event.target.value;
        fetchPlatformDetails(selectedId);
        navigate(`/?platforms=${encodeURIComponent(selectedId)}`);
    };

    return (
        <div>
            <select onChange={handleFilterChange}>
                {platforms.length > 0 ? platforms.map(platform => (
                    <option key={platform.id} value={platform.id}>{platform.name}</option>
                )) : <option disabled>Loading platforms...</option>}
            </select>
            {selectedPlatformDetails && (
                <div>
                    <h3>{selectedPlatformDetails.name}</h3>
                    <p>{selectedPlatformDetails.description}</p>
                    <img src={selectedPlatformDetails.image_background} alt="Background" />
                </div>
            )}
        </div>
    );
};

export default PlatformFilter;
