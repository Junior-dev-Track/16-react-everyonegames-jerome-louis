import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Games from '../components/Games'

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <h1>Home</h1>
            <Games />
        </div>
    );
};

export default Home;