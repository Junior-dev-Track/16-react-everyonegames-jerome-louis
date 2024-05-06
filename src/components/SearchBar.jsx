import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/layout/_header.scss';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();
    const timeoutId = useRef();

    useEffect(() => {
        if (search) {
            fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${search}`)
                .then(response => response.json())
                .then(data => setData(data.results))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [search]);

    const handleGameClick = (gameId) => {
        navigate(`/game/${gameId}`);
    };

    const handleFocus = () => {
        clearTimeout(timeoutId.current);
        setIsFocused(true);
    };

    const handleBlur = () => {
        // Set a delay before hiding the dropdown to allow for click event to be processed
        timeoutId.current = setTimeout(() => {
            setIsFocused(false);
        }, 200); // Adjust delay as necessary
    };

    return (
        <div className="searchBarContainer">
            <input
                type="text"
                placeholder="🔍 Search 866,300 games"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        setSearch("");
                    }
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {isFocused && (
                <ul className="searchSuggestions">
                    {data.map(game => (
                        <li key={game.id} onClick={() => handleGameClick(game.id)} style={{ cursor: 'pointer' }}>
                            {game.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
