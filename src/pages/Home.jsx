import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Games from '../components/Games'
import PlatformFilter from '../components/PlatformFilter';

const Home = () => {
    return (
        <div className="homeContainer">
            <Header className="homeHeader" />
            <Navigation className="navigation" />
            <PlatformFilter />
            <Games className="games" />
        </div>
    );
};

export default Home;