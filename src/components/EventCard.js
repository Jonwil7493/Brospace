import React from "react";
import "../styles/EventCard.css";

const EventCard =({ title, date, location, description }) => {
    return (
        <div className="event-card">
            <h3>{title}</h3>
            <p className="event-date">Date: {date}</p>
            <p className="event-location">Location: {location}</p>
            <p className="event-description">Description: {description}</p>
            <button className="rsvp-btn">RSVP</button>
        </div>
    );
}

export default EventCard