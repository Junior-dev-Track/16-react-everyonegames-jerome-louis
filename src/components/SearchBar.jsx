import { useEffect, useState } from "react";
import '../styles/layout/_header.scss';
// Import Link from react-router-dom if you're using it for navigation
// import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);

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

    const handleGameClick = (gameId) => {
        // Here you can handle navigation or any other action on game click
        console.log("Clicked on game with ID:", gameId);
        // Navigate using a router or simply log for now
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
                    onBlur={() => setIsFocused(false)}
                />
                {isFocused && (
                    <ul className="searchSuggestions">
                        {data.map(game => (
                            <li key={game.id}>
                                {/* Making each game clickable */}
                                <button onClick={() => handleGameClick(game.id)}>
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
