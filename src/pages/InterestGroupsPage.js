import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MyGroupsSection from '../components/MyGroupsSection'; 
import FeaturedGroupsSection from '../components/FeaturedGroupsSection'; 
import DiscoverGroupsSection from '../components/DiscoverGroupsSection'; 
import Notification from '../components/Notification';  // New Notification Component
import '../styles/InterestGroupsPage.css';

const InterestGroupsPage = ({ userRole }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Simulate fetching notifications
        const fetchedNotifications = [
            { id: 1, message: "You have 2 new group invitations!" },
            { id: 2, message: "New group 'Coding Wizards' has been created." },
        ];
        setNotifications(fetchedNotifications);
    }, []);

    return (
        <div className="interest-groups-page">
            <NavBar />
            <div className="interest-groups-header">
                <h1>Interest Groups</h1>
                <p>Explore and join different groups based on your interests.</p>
            </div>

            <div className="notifications">
                {notifications.length > 0 && notifications.map(notification => (
                    <Notification key={notification.id} message={notification.message} />
                ))}
            </div>

            <div className="groups-section-container">
                <MyGroupsSection userRole={userRole} />
                <FeaturedGroupsSection />
                <DiscoverGroupsSection />
            </div>

            <div className="create-group-section">
                <h2>Create a Group</h2>
                {userRole === 'admin' && (
                    <button className="create-group-btn">Create New Group</button>
                )}
            </div>
        </div>
    );
};

export default InterestGroupsPage;
