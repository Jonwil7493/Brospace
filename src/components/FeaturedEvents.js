import React from "react";
import EventCard from "./EventCard";
import "../styles/FeaturedEvents.css";

const FeaturedEvents = () => {

    const featuredEvents = [
        {
            id: 1,
            title: "Leadership Workshop",
            date: "2024-12-10",
            location: "Online",
            description: "Learn about leadership and how to become a better leader.",
        },
        {
            id: 2,
            title: "Community BBQ",
            date: "2024-12-12",
            location: "Community Center",
            description: "Join us for a community BBQ and social gathering.",
        }
    ];

    return (
        <div className="featured-events">
            <h2>Featured Events</h2>
            <div className="featured-events-container">
                {featuredEvents.map(event => (
                    <EventCard key={event.id} title={event.title} date={event.date} location={event.location} description={event.description} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedEvents;