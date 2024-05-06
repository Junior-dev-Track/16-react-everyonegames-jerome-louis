import { useState, useEffect, useRef } from "react";
import Card from './Card';
// import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';

const Games = () => {
    // state
    const [data, setData] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const renderAfterCalled = useRef(false);
    const navigate = useNavigate();

    // effect
    useEffect(() => {
        if (!renderAfterCalled.current) {
        fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&page=&page=1&page_size=12`)
        .then(response => response.json())
        .then(data => {
            setData(prevData => [...prevData, ...data.results]);
        })
        .catch(error => console.error('Error fetching data:', error));
        }
        renderAfterCalled.current = true;
    });

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


/* Test another method for infinte scroll

import { useState } from "react";
import Card from './Card';
import { v4 as uuid } from "uuid";
import InfiniteScroll from 'react-infinite-scroll-component';

const Games = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const fetchMoreData = () => {
        fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&page=${page}&page_size=12`)
        .then(response => response.json())
        .then(data => {
            setData(prevData => [...prevData, ...data.results]);
            setPage(prevPage => prevPage + 1);
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div className="games">
            <h2>All games</h2>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={true} // You might need to adjust this based on your API's response
                loader={<h4>Loading...</h4>}
            >
                <ul>
                    {data.map((game) => (
                        <Card key={uuid()} game={game}/>
                    ))}
                </ul>
            </InfiniteScroll>
        </div>
    );
};

export default Games;

*/

    // Scroll event handler
    // const handleScroll = () => {
    //     const threshold = 200; // Distance from the bottom of the page to trigger the fetch
    //     const isNearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - threshold;
    //     if (isNearBottom) {
    //         setPage(prevPage => prevPage + 1);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
