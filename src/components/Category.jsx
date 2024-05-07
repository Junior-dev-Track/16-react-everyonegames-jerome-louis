/* eslint-disable react/prop-types */
import { useState } from "react";
import { PiGameControllerDuotone } from "react-icons/pi";

const Category = ({category, onClick}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    

    return (
        <div className="cardWrapper" onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <li className="card">
            <img src={category.image_background} alt="Category image" />
            <div className="infos">
                <h2>{category.name}</h2>
            
            <div className={`moreInfo ${isHovered? 'visible' : ''}`}>
                        <p><PiGameControllerDuotone color="white"fontSize="1em"/> {category.games_count} games</p>
            </div>
            </div>
        </li>
        </div>
    );
};

export default Category;