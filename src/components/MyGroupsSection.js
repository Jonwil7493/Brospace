import React, { useState, useEffect } from 'react';
import GroupItem from './GroupItem'; // Import the GroupItem component

const MyGroupsSection = () => {
    const [groups, setGroups] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");  // State for the search query

    useEffect(() => {
        // Example groups, this can be replaced with a fetch request to get the actual data
        const fetchedGroups = [
            { id: 1, name: "Music Lovers", description: "A group for music enthusiasts.", memberCount: 25 },
            { id: 2, name: "Travel Buddies", description: "A group for travel lovers.", memberCount: 30 },
            { id: 3, name: "Cooking Club", description: "Join for cooking tips and recipes.", memberCount: 12 },
            { id: 4, name: "Fitness Enthusiasts", description: "For those passionate about fitness.", memberCount: 40 },
        ];
        setGroups(fetchedGroups);
    }, []);

    // Filter groups based on the search query
    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="my-groups-section">
            <h2>My Groups</h2>

            {/* Search bar */}
            <input
                type="text"
                placeholder="Search My Groups"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  
            />

            <div className="group-items">
                {/* Use GroupItem component to render each group */}
                {filteredGroups.map(group => (
                    <GroupItem key={group.id} group={group} />
                ))}
            </div>
        </div>
    );
};

export default MyGroupsSection;
