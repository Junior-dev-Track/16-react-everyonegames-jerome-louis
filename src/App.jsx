import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Details from './pages/Details';


// Use the Home component in your routing setup
const App = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/game/:id" element={<Details/>} />
        {/* path "*" si url ne correspond a rien de déclaré */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
 );
};

export default App;



