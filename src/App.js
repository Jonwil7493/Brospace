import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import ChallengesPage from './pages/ChallengesPage';
import InterestGroupsPage from './pages/InterestGroupsPage';
import EventsPage from './pages/EventsPage';
import PersonalMessaging from './pages/PersonalMessagesPage';
import BrofilePage from './pages/BrofilePage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/interestgroups" element={<InterestGroupsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/personalmessages" element={<PersonalMessaging />} /> 
          <Route path="/BrofilePage" element={<BrofilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
