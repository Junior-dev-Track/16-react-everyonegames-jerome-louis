/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { FaWindows } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const Card = ({ game, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);


    return (
        <div className="cardWrapper" onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li className="card">
                <img src={game.background_image} alt="Game image" />
                <div className="infos">
                    <h2>{game.name}</h2>
                    <ul>
                        {game.parent_platforms.slice(0, 3).map((platformObj) => (
                            <li key={uuid()}>
                                {platformObj.platform.id === 1 && <FaWindows /> }
                                {platformObj.platform.id === 2 && <FaPlaystation /> }
                                {platformObj.platform.id === 3 && <FaXbox /> }
                                {platformObj.platform.id === 4 && <FaAppStoreIos /> }
                                {platformObj.platform.id === 5 && <FaApple /> }
                                {platformObj.platform.id === 6 && <FaLinux /> }
                                {platformObj.platform.id === 7 && <SiNintendo /> }
                                {platformObj.platform.id === 8 && <IoLogoAndroid /> }

                            </li>
                        ))}
                    </ul>
                    <div className={`moreInfo ${isHovered? 'visible' : ''}`}>
                        <p>{game.released} <FaCalendarAlt color="white"fontSize="1em" /></p>
                        <p>{game.rating} <FaStar color="orange" fontSize="1em" /></p>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default Card;

/*
    return (
    <div>
      <h1>{game.name}</h1>
      <div>
        {game.platforms.map((platform) => (
          <div key={platform.id}>
            {platform.id === 1 && <FaWindows />}
            <span>{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
*/