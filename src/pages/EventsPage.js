import React from 'react';
import NavBar from '../components/NavBar';
import FeaturedEvents from '../components/FeaturedEvents';
import Calendar from '../components/Calendar';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/EventsPage.css';

function EventsPage() {
  return (
    <div className="events-page">
      <NavBar />
      <header className="events-header">
        <h1>Explore Our Events</h1>
      </header>
      <div className="search-categories">
        <SearchBar />
        <CategoryFilter />
      </div>
      <FeaturedEvents />
      <Calendar />
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>Event list coming soon...</p>
      </section>
      <section className="past-events">
        <h2>Past Events Archive</h2>
        <p>Past event list coming soon...</p>
      </section>
    </div>
  );
}

export default EventsPage;
