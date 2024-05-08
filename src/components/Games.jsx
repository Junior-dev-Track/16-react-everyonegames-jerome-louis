import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from './Card';

const Games = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const queryParams = new URLSearchParams(location.search);
        let url = `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=12`;

        // Include platform filter if it exists
        if (queryParams.get('platforms')) {
            url += `&platforms=${queryParams.get('platforms')}`;
        }

        // Include date filter if it exists
        if (queryParams.get('dates')) {
            url += `&dates=${queryParams.get('dates')}`;
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
        navigate(`/game/${gameId}`);
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
