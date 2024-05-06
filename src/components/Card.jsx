/* eslint-disable react/prop-types */
const Card = ({ game, onClick }) => {
    return (
        <div className="cardWrapper" onClick={onClick}>
            <li className="card">
                <img src={game.background_image} alt="Game image" />
                <div className="infos">
                    <h2>{game.name}</h2>
                </div>
            </li>
        </div>
    );
};

export default Card;
