import { NavLink } from 'react-router-dom';

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
        </div>
    );
};

export default Navigation;