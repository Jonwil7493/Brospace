import React, { useState } from 'react';

const DiscoverGroupsSection = () => {
    const [searchQuery, setSearchQuery] = useState("");  // State for the search query
    const groups = [
        { id: 1, name: "Sports Fans", description: "A group for sports enthusiasts." },
        { id: 2, name: "Tech Innovators", description: "Join this group for all things tech." },
        { id: 3, name: "Book Club", description: "A group for avid readers." },
        // Add more group data here
    ];

    // Filter groups based on the search query
    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    

    return (
        <div className="discover-groups-section">
            <h2>Discover Groups</h2>
            {/* Search bar */}
            <input
                type="text"
                placeholder="Search Groups"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  // Update search query on input change
            />

            <div className="group-items">
                {/* Map over filtered groups and display them */}
                {filteredGroups.map(group => (
                    <div key={group.id} className="group-item">
                        <h3>{group.name}</h3>
                        <p>{group.description}</p>
                        {/* View and Join buttons */}
                        <button className="view-btn">View</button>
                        <button className="join-btn">Join</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverGroupsSection;
