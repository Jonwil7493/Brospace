import React, { useState } from 'react';
import '../styles/CreatePost.css';

function CreatePost({ onSubmit }) {
    const [postContent, setPostContent] = useState('');

    const handleSubmit = () => {
        if (postContent.trim() !== '') {
            onSubmit(postContent);  // Pass the content to the parent (MainFeed)
            setPostContent(''); // Clear the textarea after submission
        }
    };

    return (
        <div className="create-post">
            <textarea
                placeholder="What's on your mind?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
            />
            <button onClick={handleSubmit}>Post</button>
        </div>
    );
}

export default CreatePost;
