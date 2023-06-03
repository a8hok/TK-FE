import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
