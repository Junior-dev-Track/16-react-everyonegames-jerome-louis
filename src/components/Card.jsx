/* eslint-disable react/prop-types */
const Card = ({game}) => {
    return (
        <li className="card">
            <img src={game.background_image} alt="Game image" style={{width:'10%'}} />
            <div className="infos">
                <h2>{game.name}</h2>
            </div>
        </li>
    );
};

export default Card;
