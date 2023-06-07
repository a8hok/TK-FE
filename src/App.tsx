import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Resource from './Pages/Resource/Resource';
import Settings from './Pages/Settings';
import Help from './Pages/HelpPage/Help';
import Survey from './Pages/Survey';
import Dashboard from './Pages/Dashboard';
import SurveyStart from './Pages/SurveyStart';
import SurveyEnd from './Pages/SurveyEnd';
import applicationData from '../ApplicationData.json';
const App: React.FC = () => {
  console.log(applicationData.questions[0][0]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/start" element={<SurveyStart />} />
        <Route path="/end" element={<SurveyEnd />} />

        <Route
          path="/survey"
          element={<Survey surveyDataProps={applicationData.questions[0][0]} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
