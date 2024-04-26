import Logo from './Logo'
import SearchBar from './SearchBar';
const Header = () => {
    return (
        <div>
            <div className="header">
            <Logo />
            <SearchBar />
            </div>
        </div>
    );
};

export default Header;