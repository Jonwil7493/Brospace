import React, { useState } from 'react';

function Shoutouts() {
  const [shoutout, setShoutout] = useState('');

  const handleShoutoutChange = (e) => {
    setShoutout(e.target.value);
  };

  const handleShoutoutSubmit = () => {
    // Here we can add logic to handle the shoutout submission
    alert(`Shoutout sent: ${shoutout}`);
  };

  return (
    <section className="shoutouts">
      <h2>Shoutouts</h2>
      <button className="shoutout-btn" onClick={() => alert("Shoutout form opened!")}>Send Shoutout</button>
      <div id="shoutout-list">
        <p>Shoutout: Great job on your 5-day streak!</p>
      </div>
      <textarea
        value={shoutout}
        onChange={handleShoutoutChange}
        placeholder="Type your shoutout here"
      />
      <button onClick={handleShoutoutSubmit}>Submit Shoutout</button>
    </section>
  );
}

export default Shoutouts;
