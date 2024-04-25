import { useEffect, useState } from "react";

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(""); // Changed initial state to an empty string

    // effect
    useEffect(() => {
        if (search) { // Only fetch if search is not empty
            fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${search}`)
            .then(response => response.json())
            .then(data => {
                setData(data.results); // Directly set the results to data state
            })
            .catch(error => console.error('Error fetching data:', error));
        }
    }, [search]);

    const searchGames = () => {
        setSearch("");
    };

    return (
        <div>
          <input 
            type="text" 
            placeholder="Search games..." 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            onKeyDown={event => {
              if (event.key === 'Enter') {
                searchGames();
              }
            }}
          />
          <button onClick={searchGames}>Search</button>
          <ul>
            {data.map(game => ( // Corrected to use data instead of results
              <li key={game.id}>{game.name}</li>
            ))}
          </ul>
        </div>
    );
};

export default SearchBar;
