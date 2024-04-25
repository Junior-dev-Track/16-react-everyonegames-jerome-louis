import { useEffect, useState } from 'react';
import Category from "./Category";
import { v4 as uuid } from "uuid";

const Categories = () => {

const [data, setData] = useState([]);

useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        setData(prevData => [...prevData, ...data.results]);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);

    return (
        <div>
            <ul>
                {data.map((genre) => (
                    <Category key={uuid()} category={genre}/>
                ))}
            </ul>
        </div>
    );
};

export default Categories;