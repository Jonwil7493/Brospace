import React from 'react';
import '../styles/LeftSidebar.css';

function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <div className="events-box">
                <h3>Upcoming Events</h3>
                <p>Check out upcoming events here.</p>
            </div>
            <div className="groups-box">
                <h3>Popular Interest Groups</h3>
                <p>Explore popular groups here.</p>
            </div>
        </div>
    );
}

export default LeftSidebar;
