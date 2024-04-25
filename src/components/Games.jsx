import { useState, useEffect } from "react";
import Card from './Card';
import { v4 as uuid } from "uuid";

const Games = () => {
    // state
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [ setTotalPages] = useState(1);

    // effect
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            setData(prevData => [...prevData, ...data.results]);
            setTotalPages(data.count / 20); // Assuming 20 items per page
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [page]);

    // Scroll event handler
    const handleScroll = () => {
        const threshold = 200; // Distance from the bottom of the page to trigger the fetch
        const isNearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - threshold;
        if (isNearBottom) {
            setPage(prevPage => prevPage + 1);
        }
    };
    
    
    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="games">
            <h1>Games</h1>
            <ul>
                {data.map((game) => (
                    <Card key={uuid()} game={game}/>
                ))}
            </ul>
        </div>
    );
};

export default Games;
