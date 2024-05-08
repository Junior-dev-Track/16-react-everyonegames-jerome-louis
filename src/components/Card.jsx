/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { FaWindows, FaPlaystation, FaXbox, FaAppStoreIos, FaApple, FaLinux, FaStar, FaCalendarAlt } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";

const Card = ({ game, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [screenshots, setScreenshots] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseEnter = async () => {
        setIsHovered(true);
        try {
            const response = await fetch(`https://api.rawg.io/api/games/${game.id}/screenshots?key=${import.meta.env.VITE_API_KEY}`);
            const data = await response.json();
            setScreenshots(data.results);
        } catch (error) {
            console.error('Error fetching screenshots data:', error);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handlePrevClick = (e) => {
        e.stopPropagation(); // Prevents onClick from firing when navigating screenshots
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1));
    };

    const handleNextClick = (e) => {
        e.stopPropagation(); // Prevents onClick from firing when navigating screenshots
        setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1));
    };


    return (
        <div className="cardWrapper" onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li className="card">
                {isHovered && screenshots.length > 0 ? (
                    <div className="carousel">
                        <button className="carouselButton prev" onClick={handlePrevClick}>&#10094;</button>
                        <div className="carouselContainer">
                            {screenshots.map((screenshot, index) => (
                                <div key={screenshot.id} className="screenshotContainer" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                    <img src={screenshot.image} alt="Screenshot" />
                                </div>
                            ))}
                        </div>
                        <button className="carouselButton next" onClick={handleNextClick}>&#10095;</button>
                    </div>
                ) : (
                    <img src={game.background_image} alt="Game image" />
                )}
                <div className="infos">
                    <h2>{game.name}</h2>
                    <ul>
                        {game.parent_platforms.slice(0,3).map((platformObj) => (
                            <li key={uuid()}>
                                {platformObj.platform.id === 1 && <FaWindows />}
                                {platformObj.platform.id === 2 && <FaPlaystation />}
                                {platformObj.platform.id === 3 && <FaXbox />}
                                {platformObj.platform.id === 4 && <FaAppStoreIos />}
                                {platformObj.platform.id === 5 && <FaApple />}
                                {platformObj.platform.id === 6 && <FaLinux />}
                                {platformObj.platform.id === 7 && <SiNintendo />}
                                {platformObj.platform.id === 8 && <IoLogoAndroid />}
                            </li>
                        ))}
                    </ul>
                    <div className={`moreInfo ${isHovered ? 'visible' : ''}`}>
                        <p>{game.released} <FaCalendarAlt color="white" fontSize="1em" /></p>
                        <p>{game.rating} <FaStar color="orange" fontSize="1em" /></p>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default Card;
