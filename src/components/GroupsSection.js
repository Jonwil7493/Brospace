import React from 'react';
import '../styles/GroupsSection.css';
import FilterBar from './FilterBar';
import GroupCard from './GroupCard';
import GroupItem from './GroupItem';

const GroupsSection = () => {
    return (
        <div className="groups-section">
            <div className='my-groups'>
                <h2>My Groups</h2>
                <FilterBar />
                <GroupCard  groupname="Fitness" />
                <GroupCard  groupname="Self-improvement" />
                <GroupCard  groupname="Mental Health" />
            </div>
            <div className='featured-groups'>
                <h2>Featured Groups</h2>
                <FilterBar />
                <GroupCard groupname="Tech Innovators" />
                <GroupCard groupname="Creatives" />
            </div>
            <div className='discover-groups'>
                <h2>Discover Groups</h2>
                <GroupItem groupname="Coding Enthusiasts" />
                <GroupItem groupname="Yoga & Wellness" />
                <GroupItem groupname="Adventure Seekers" />
            </div>
        </div>
    );
};

export default GroupsSection;