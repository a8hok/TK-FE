import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Resource from './Pages/Resource/Resource';
import Settings from './Pages/Settings';
import Survey from './Pages/Survey';
import Dashboard from './Pages/Dashboard';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
