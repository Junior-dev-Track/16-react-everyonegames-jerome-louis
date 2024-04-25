

const Card = ({game}) => {
    return (
        <li className="card">
            <img src="{game.background_image.}" alt="Game image" />
            <div className="infos">
                <h2>Game name</h2>
            </div>
        </li>
    );
};

export default Card;