import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from './Card';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Games = () => {
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(1); // Use useState for pageCount
    const navigate = useNavigate();
    const location = useLocation(); // To access query params

    // Function to extract query parameters
    const getPlatformId = () => new URLSearchParams(location.search).get('platforms');

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const platformId = getPlatformId();
        let url = `https://api.rawg.io/api/games?key=${API_KEY}&page=${pageCount}&page_size=12`;
        if (platformId) {
            url += `&platforms=${platformId}`;
        }

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
    }, [location.search, pageCount]); // Depend on location.search and pageCount to re-run the effect when either changes

    const handleGameClick = (gameId) => {
        navigate(`/game/${gameId}`); // Navigate to the game details page
    };

    const handleButtonRightClick = () => {
        setPageCount(prevPageCount => prevPageCount + 1); // Update pageCount state
        // No need to fetch again here, as useEffect will handle it
    };

    const handleButtonLeftClick = () => {
        setPageCount(prevPageCount => prevPageCount > 1? prevPageCount - 1 : prevPageCount); // Prevent going below 1
        // No need to fetch again here, as useEffect will handle it
    };

    return (
        <div className="games">
            <h2>All games</h2>
            <ul>
                {data.map((game) => (
                    <Card key={game.id} game={game} onClick={() => handleGameClick(game.id)} />
                ))}
            </ul>
            <div className="btns">
                <button type="button" onClick={handleButtonLeftClick}><FaArrowLeft fontSize="2em"/></button>
                <button type="button" onClick={handleButtonRightClick}><FaArrowRight fontSize="2em"/></button>
            </div>
        </div>
    );
};

export default Games;
