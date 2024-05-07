import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import AboutGame from '../components/AboutGame';

const Details = () => {
    const { id: gameId } = useParams();
    return (
        <div className='container'>
            <Header className="header" />
            <Navigation className="navigation"/>
            <AboutGame className="game" gameId={gameId} />
        </div>
    );
};

export default Details;
