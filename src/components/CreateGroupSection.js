import React, { useState } from 'react';

const CreateGroupSection = () => {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value);
    };

    const handleGroupDescriptionChange = (e) => {
        setGroupDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to an API or handle it as needed
        console.log('Group Created:', { groupName, groupDescription });
        setGroupName('');
        setGroupDescription('');
    };

    return (
        <div className="create-group-section">
            <h2>Create a New Group</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="group-name">Group Name</label>
                    <input
                        type="text"
                        id="group-name"
                        value={groupName}
                        onChange={handleGroupNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="group-description">Description</label>
                    <textarea
                        id="group-description"
                        value={groupDescription}
                        onChange={handleGroupDescriptionChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Create Group</button>
            </form>
        </div>
    );
};

export default CreateGroupSection;
