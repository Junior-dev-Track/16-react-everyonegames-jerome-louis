import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import AboutGenre from '../components/AboutGenre';

const Details = () => {
    const { id: categoryId } = useParams();
    return (
        <div className='detailsContainer'>
            <Header className="header"/>
            <Navigation className="navigation" />
            <AboutGenre className="genre" categoryId={categoryId} />
        </div>
    );
};

export default Details;