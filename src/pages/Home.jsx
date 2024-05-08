import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Games from '../components/Games'
import PlatformFilter from '../components/PlatformFilter';
import RecentGamesFilter from '../components/RecentGamesFilter';

const Home = () => {
    return (
        <div className="homeContainer">
            <Header className="homeHeader" />
            <Navigation className="navigation" />
            <div className="filtersContainer">
                <PlatformFilter />
                <RecentGamesFilter />
            </div>
            <Games className="games" />
        </div>
    );
};

export default Home;
