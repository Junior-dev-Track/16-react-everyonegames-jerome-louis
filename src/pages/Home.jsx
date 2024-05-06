import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Games from '../components/Games'

const Home = () => {
    return (
        <div className="homeContainer">
            <Header className="header" />
            <Navigation className="navigation" />
            <Games className="games" />
        </div>
    );
};

export default Home;