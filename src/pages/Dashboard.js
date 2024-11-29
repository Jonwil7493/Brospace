import React, { useState, useEffect } from 'react';
import LeftSidebar from '../components/LeftSideBar';
import MainFeed from '../components/MainFeed.js';
import RightSidebar from '../components/RightSidebar';
import NavBar from '../components/NavBar';
import Notification from '../components/Notification';
import '../styles/Dashboard.css';

function Dashboard() {
  // Notifications state
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from backend or API
    const fetchNotifications = async () => {
      // Mock notifications; replace with actual API call
      const mockNotifications = [
        { id: 1, message: "You have a new challenge update!" },
        { id: 2, message: "New group activity in 'Fitness Bros'." },
        { id: 3, message: "Don't miss the upcoming event this Friday!" },
      ];
      setNotifications(mockNotifications);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="welcome-banner">
        <h2>Welcome Brother!</h2>
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="notifications">
        {notifications.length > 0 &&
          notifications.map((notification) => (
            <Notification key={notification.id} message={notification.message} />
          ))}
      </div>
      <div className="dashboard-container">
        <div className="left-sidebar">
          <LeftSidebar />
        </div>
        <div className="main-feed">
          <MainFeed />
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
