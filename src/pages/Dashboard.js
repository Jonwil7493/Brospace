import React from 'react';
import LeftSidebar from '../components/LeftSideBar';
import MainFeed from '../components/MainFeed.js';
import RightSidebar from '../components/RightSidebar';
import NavBar from '../components/NavBar';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="welcome-banner">
        <h2>Welcome Brother!</h2>
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="dashboard-container">
        <div className="left-sidebar">
          <LeftSidebar />
        </div>
        <div className="main-feed">
          <MainFeed /> {/* Only one instance of MainFeed */}
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
