import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Card from './Card';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Games = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        let url = `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=12`;

        const platformId = searchParams.get('platforms');
        const dates = searchParams.get('dates');
        const page = searchParams.get('page') || '1'; // Get page from query params

        if (platformId) {
            url += `&platforms=${platformId}`;
        }
        if (dates) {
            url += `&dates=${dates}`;
        }
        url += `&page=${page}`; // Ensure page is included in the URL

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
    }, [location.search]); // Depend on location.search to re-run the effect when it changes

    const handleGameClick = (gameId) => {
        navigate(`/game/${gameId}`);
    };

    const handleButtonRightClick = () => {
        const newPageCount = parseInt(searchParams.get('page')) || 1;
        setSearchParams({ page: newPageCount + 1 }); // Update page count in URL
    };

    const handleButtonLeftClick = () => {
        const newPageCount = parseInt(searchParams.get('page')) || 1;
        if (newPageCount > 1) {
            setSearchParams({ page: newPageCount - 1 }); // Update page count in URL
        }
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
