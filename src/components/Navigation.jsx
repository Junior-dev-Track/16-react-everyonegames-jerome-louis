import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
               <NavLink to="/">  {/* Correspond path router */}
                    <li>Home</li>
                </NavLink>
                <NavLink to="/categories">
                    <li>Categories</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;