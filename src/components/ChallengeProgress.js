import React from 'react';

function ChallengeProgress() {
  return (
    <section className="challenge-progress">
      <h2>Your Progress</h2>
      <p>Challenges Completed: <span id="challenge-count">10</span></p>
      <div className="progress-bar">
        <div className="progress" style={{ width: '75%' }}></div>
      </div>
      <p>Current Streak: <span id="streak-count">5 days</span></p>
    </section>
  );
}

export default ChallengeProgress;
