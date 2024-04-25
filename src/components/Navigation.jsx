import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
               <NavLink to="/">  {/* Correspond path router */}
                    <li>Home</li>
                </NavLink>
                <NavLink to="/genre">
                    <li>Genre</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;