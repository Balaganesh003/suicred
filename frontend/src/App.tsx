import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Wrapper from './pages/Wrapper';
import ReputationPage from './pages/Reputation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/wrapper" element={<Wrapper />} />
        <Route path="/dashboard/reputation" element={<ReputationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
