import React from 'react';
import '../styles/RightSidebar.css';

function RightSidebar() {
    return (
        <div className="right-sidebar">
            <div className="challenges-box">
                <h3>Current Challenges</h3>
                <p>Your active challenges will be displayed here.</p>
            </div>
            <div className="messages-box">
                <h3>Personal Messages</h3>
                <p>View your recent personal messages here.</p>
            </div>
        </div>
    );
}

export default RightSidebar;
