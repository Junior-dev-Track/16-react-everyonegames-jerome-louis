import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import AboutGame from '../components/AboutGame';

const Details = () => {
    const { id: gameId } = useParams();
    return (
        <div>
            <Header />
            <Navigation />
            <h1>Game Details</h1>
            <AboutGame gameId={gameId} />
        </div>
    );
};

export default Details;
