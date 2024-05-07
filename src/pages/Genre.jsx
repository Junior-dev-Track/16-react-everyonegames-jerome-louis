import Navigation from '../components/Navigation'
import Categories from "../components/Categories"
import Header from '../components/Header'


const Genre = () => {

    return (
        <div className='genreContainer'>
            <Header className="header"/>
            <Navigation className="navigation" />
            <h1>Genres</h1>
            <Categories className="genres"/>
        </div>
    );
};

export default Genre;