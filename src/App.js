import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import ChallengesPage from './pages/ChallengesPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/challenges' element={<ChallengesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
