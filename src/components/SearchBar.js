import React from "react";
import '../styles/SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for events..." />
            <button className="search-button">Search</button>
        </div>
    )
}

export default SearchBar