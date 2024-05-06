import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/layout/_header.scss';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate(); // Use the useNavigate hook

    useEffect(() => {
        if (search) {
            fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${search}`)
                .then(response => response.json())
                .then(data => {
                    setData(data.results);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [search]);

    const searchGames = () => {
        setSearch("");
    };

    const handleGameClick = (gameId, event) => {
        event.stopPropagation(); // Prevent the event from bubbling up
        console.log("Navigating to game ID:", gameId);
        navigate(`/game/${gameId}`);
    };


    return (
        <div className="searchBarContainer">
            <div>
                <input
                    type="text"
                    placeholder="🔍   Search 866,300 games"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            searchGames();
                        }
                    }}
                    onFocus={() => setIsFocused(true)}
                    //onBlur={() => setIsFocused(false)}
                />
                {isFocused && (
                    <ul className="searchSuggestions">
                        {data.map(game => (
                            <li key={game.id}>
                                <button onClick={(e) => handleGameClick(game.id, e)}
                                        style={{all: 'unset', cursor: 'pointer'}}>
                                    {game.name}
                                </button>

                            </li>
                        ))}
                    </ul>

                )}
            </div>
        </div>
    );
};

export default SearchBar;
