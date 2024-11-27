import React, { useState } from 'react';
import CreatePost from '../components/CreatePost.js';
import '../styles/MainFeed.css';

function MainFeed() {
    const [posts, setPosts] = useState([
        // Initial post with user details
        { 
            id: 1, 
            content: 'Welcome to brospace brother!',
            userName: 'Jonathan Williams',
            userImage: 'https://www.example.com/profile.jpg' // Replace with an actual image URL
        }
    ]);

    const handlePostSubmit = (newPostContent) => {
        const newPost = {
            id: posts.length + 1,
            content: newPostContent,
            userName: 'John Doe',  // Hardcoded for now; replace with dynamic data later
            userImage: 'https://www.example.com/profile.jpg'  // Hardcoded image URL; replace as needed
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="main-feed">
            <h2>Community Posts</h2>
            <CreatePost onSubmit={handlePostSubmit} />

            <div className="feed-posts">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <img src={post.userImage} alt={post.userName} className="user-avatar" />
                            <h3>{post.userName}</h3>
                        </div>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainFeed;
