import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from './Card';

const Games = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation(); // To access query params

    // Function to extract date range from query parameters
    const getDateFilter = () => new URLSearchParams(location.search).get('dates');

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const dates = getDateFilter();
        let url = `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=12`;
        if (dates) {
            url += `&dates=${dates}`;
        }

        console.log("Fetching games from URL:", url); // Log the URL to verify it's correct

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.results); // Update the data state with the fetched games
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setData([]); // Clear data on error
            });
    }, [location.search]); // Depend on location.search to re-run the effect when URL query params change

    const handleGameClick = (gameId) => {
        navigate(`/game/${gameId}`); // Navigate to the game details page
    };

    return (
        <div className="games">
            <h2>All games</h2>
            <ul>
                {data.map((game) => (
                    <Card key={game.id} game={game} onClick={() => handleGameClick(game.id)} />
                ))}
            </ul>
        </div>
    );
};

export default Games;