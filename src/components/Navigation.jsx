import { NavLink } from 'react-router-dom';
import PlatformFilter from '../components/PlatformFilter';
import RecentGamesFilter from '../components/RecentGamesFilter';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className="nav-link">  {/* Correspond path router */}
                    <li className="nav-link-item">Home</li>
                </NavLink>
                <NavLink to="/genre" className="nav-link">
                    <li className="nav-link-item">Genre</li>
                </NavLink>
               
            </ul>
            <div className="filtersContainer">
                <PlatformFilter />
                <RecentGamesFilter />
            </div>
        </div>
    );
};

export default Navigation;