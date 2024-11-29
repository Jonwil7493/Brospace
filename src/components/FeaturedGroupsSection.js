import React from 'react';

const FeaturedGroupsSection = () => {
    const featuredGroups = [
        { id: 1, name: "Photography Enthusiasts", description: "A group for people who love photography." },
        { id: 2, name: "Nature Explorers", description: "For those who enjoy hiking and outdoor adventures." },
        { id: 3, name: "Art Collectors", description: "A group for art collectors and creators." },
        // Add more featured group data here
    ];

    
    return (
        <div className="featured-groups-section">
            <h2>Featured Groups</h2>

            <div className="group-items">
                {/* Map over the featured groups and display them */}
                {featuredGroups.map(group => (
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

export default FeaturedGroupsSection;
