import React from 'react';

function MemberSpotlight() {
  return (
    <section className="member-spotlight">
      <h2>Motivational Member of the Week</h2>
      <div className="spotlight-profile">
        <img src="user.jpg" alt="User Photo" />
        <p>John Doe</p>
        <p>Reason: "Completed 20 challenges in a row and helped others stay motivated!"</p>
      </div>
    </section>
  );
}

export default MemberSpotlight;
