

const Card = ({game}) => {
    return (
        <li className="card">
            <img src="{game.background_image.jpg}" alt="Game image" />
            <div className="infos">
                <h2>Game name</h2>
            </div>
        </li>
    );
};

export default Card;