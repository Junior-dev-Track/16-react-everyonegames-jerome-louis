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

        const platformId = queryParams.get('platforms');
        const dates = queryParams.get('dates');

        if (platformId) {
            url += `&platforms=${platformId}`;
        }
        if (dates) {
            url += `&dates=${dates}`;
        }

        console.log("Fetching games from URL:", url);

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setData([]);
            });
    }, [location.search]);

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
