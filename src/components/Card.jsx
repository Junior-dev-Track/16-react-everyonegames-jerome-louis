/* eslint-disable react/prop-types */
const Card = ({game}) => {
    return (
        <div className="cardWrapper">
        <li className="card">
            <img src={game.background_image} alt="Game image"/>
            <div className="infos">
                <h2>{game.name}</h2>
            </div>
        </li>
        </div>
    );
};

export default Card;
