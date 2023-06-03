import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Resource from './Pages/Resource/Resource';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resource" element={<Resource />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
