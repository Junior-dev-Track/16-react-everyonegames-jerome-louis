import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';


// Use the Home component in your routing setup
const App = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        {/* path "*" si url ne correspond a rien de déclaré */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
 );
};

export default App;



