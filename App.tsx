import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import WeightLoss from './pages/WeightLoss';
import LabTesting from './pages/LabTesting';
import Nutrition from './pages/Nutrition';
import Longevity from './pages/Longevity';
import Assessment from './pages/Assessment';
import HowItWorks from './pages/HowItWorks';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="weight-loss" element={<WeightLoss />} />
          <Route path="lab-testing" element={<LabTesting />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="longevity" element={<Longevity />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;