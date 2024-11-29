import React from 'react';
import '../styles/ChallengesPage.css';
import Navbar from '../components/NavBar';
import ChallengesHeader from '../components/ChallengesHeader';

const ChallengesPage = () => {
    return (
        <div className="challenges-page">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <ChallengesHeader />

            {/* Container for Sections (Progress + Challenges + Add New) */}
            <div className="sections-container">
                {/* Challenges Progress Section (on left side) */}
                <section className="challenges-progress-section">
                    <h2>Your Progress</h2>
                    <div className="progress-details">
                        <div className="challenges-completed">
                            <h3>Challenges Completed</h3>
                            <p>0</p>
                        </div>
                        <div className="challenge-streaks">
                            <h3>Challenge Streak</h3>
                            <p>0</p>
                        </div>
                        <div className="badges-earned">
                            <h3>Badges Earned</h3>
                            <p>0</p>
                        </div>
                    </div>
                </section>

                {/* Current Challenges Section (on the right) */}
                <section className="current-challenges-section">
                    <h2>Current Challenges</h2>
                    <ul>
                        <li>Challenge 1</li>
                        <li>Challenge 2</li>
                    </ul>

                    {/* Add New Challenge Section now inside Current Challenges */}
                    <div className="add-new-challenge-section">
                        <button>Add New Challenge</button>
                    </div>
                </section>

                {/* Suggested Challenges section */}
                <section className="suggested-challenges-section">
                    <h2>Suggested Challenges</h2>
                    <div className="suggested-challenges">
                        <p>Start a daily meditation</p>
                        <button>Join Challenge</button>
                        </div>
                    <div className="suggested-challenges">
                        <p>Complete 30 push-ups every day for 30 days!</p>
                        <button>Join Challenge</button>
                    </div>
                    <div className="suggested-challenges">
                        <p>Read a book every day for 30 days</p>
                        <button>Join Challenge</button>
                    </div>
                </section>
            </div>

            {/*member spotlight and shoutouts flex container */}
            <div className="spotlight-shoutouts-container">
                {/* Member Spotlight Section */}
            {/* Featured Progress Section */}
            <section className="featured-progress-section">
                <h2>Member spotlight</h2>
                <div className="spotlight">
                    <p>Member spotlight: </p>
                    <p>"Completed # of challenges this week"</p>
                </div>
            </section>

            {/* Peer-to-Peer Shoutouts Section */}
            <section className="peer-shoutouts-section">
                <h2>Shoutouts</h2>
                <div className="shoutouts-list">
                    <div className="shoutout">
                        <p>Member 1 shouted out Member 2!</p>
                    </div>
                    <div className="shoutout">
                        <p>Member 2 shouted out Member 3!</p>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default ChallengesPage;
