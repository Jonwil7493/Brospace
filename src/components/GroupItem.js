import React from 'react';

const GroupItem = ({ group, userRole }) => {
    return (
        <div className="group-item">
            <h3>{group.name}</h3>
            <p>{group.description}</p>
            <p>Members: {group.memberCount}</p>
            <button className="view-btn">View</button>
            
            {/* Show Join button for normal users, and Edit/Delete buttons for Admin */}
            {userRole === 'admin' ? (
                <>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                </>
            ) : (
                <button className="join-btn">Join</button>
            )}
        </div>
    );
};

export default GroupItem;
