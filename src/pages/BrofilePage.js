import React from "react";
import '../styles/BrofilePage.css';
import Navbar from "../components/NavBar";

const BrofilePage = () => {
  return (
    <div className="brofile-page">
        <Navbar />
      {/* Profile Header */}
      <div className="profile-header">
        <img className="profile-picture" src="../images/BlankProfilePic.jpg" alt="Profile" />
        <div className="profile-info">
          <h1 className="username">Jonathan Doe</h1>
          <p className="status">"Working on new goals"</p>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-me">
        <h2>About Me</h2>
        <p>"I'm passionate about self-improvement, fitness, and personal growth. I enjoy connecting with like-minded individuals and challenging myself."</p>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Achievements Section */}
      <div className="achievements">
        <h2>Achievements & Progress</h2>
        <ul>
          <li>25 Challenges Completed</li>
          <li>15-Day Fitness Streak</li>
          <li>Badge: "Top Motivator"</li>
        </ul>
        <div className="progress-bar">
          <div className="progress" style={{ width: '60%' }}></div>
        </div>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Recent Activities Section */}
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>Joined "Fitness Enthusiasts" group</li>
          <li>Attended "Mental Health Awareness" event</li>
          <li>Posted in "Self-Improvement" thread</li>
        </ul>
        <button className="see-all-btn">See All Activity</button>
      </div>

      {/* Friends Section */}
      <div className="friends">
        <h2>Friends & Connections</h2>
        <div className="friends-list">
          <div className="friend">John</div>
          <div className="friend">Jane</div>
        </div>
        <button className="add-friend-btn">Add Friend</button>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}


export default BrofilePage;