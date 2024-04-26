import { useEffect, useState } from "react";
import '../styles/layout/_header.scss';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false); // Add this line

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
                    onFocus={() => setIsFocused(true)} // Add this line
                    onBlur={() => setIsFocused(false)} // Add this line
                />
                {isFocused && ( // Add this line
                    <ul className="searchSuggestions">
                        {data.map(game => (
                            <li key={game.id}>{game.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;