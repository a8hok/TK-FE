import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Survey from './Pages/Survey';
import Dashboard from './Pages/Dashboard';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
