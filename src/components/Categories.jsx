import { useEffect, useState, useRef } from 'react';
import Category from "./Category";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';


const Categories = () => {

const [data, setData] = useState([]);
const navigate = useNavigate();
const renderAfterCalled = useRef(false);

useEffect(() => {
    if (!renderAfterCalled.current) {
    fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        setData(prevData => [...prevData, ...data.results]);
    })
    .catch(error => console.error('Error fetching data:', error));
}
renderAfterCalled.current = true;
}, []);


const handleGenreClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };


    return (
        <div className='genres'>
            <h2>All genres</h2>
            <ul>
                {data.map((genre) => (
                    <Category key={uuid()} category={genre} onClick={() => handleGenreClick(genre.id)}/>
                ))}
            </ul>
        </div>
    );
};

export default Categories;