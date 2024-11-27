import React from 'react';

function ChallengeFeed() {
  return (
    <section className="challenge-feed">
      <h2>Current Challenges</h2>
      <div className="challenge-card">
        <h3>Fitness Challenge</h3>
        <p>Complete 30 push-ups every day for 30 days!</p>
        <button className="join-btn">Join Challenge</button>
      </div>
      {/* Repeat the challenge card as needed */}
    </section>
  );
}

export default ChallengeFeed;
