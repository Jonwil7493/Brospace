import React, { useState } from 'react';
import '../styles/PersonalMessaging.css';
import Navbar from '../components/NavBar';

function PersonalMessaging() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  // Placeholder data
  const conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', unread: 1 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Let’s catch up soon!', unread: 0 },
    // Add more conversations as needed
  ];

  const handleSendMessage = () => {
    // Logic to send the message (this will be linked with backend later)
    setNewMessage('');
  };

  const handleNewChat = () => {
    // Logic to start a new chat (could open a modal or redirect to a new chat page)
    console.log("Starting a new chat...");
  };

  return (
    <div className="messaging-page">
      <Navbar />
      <div className="messaging-container">
        {/* Sidebar with conversations */}
        <div className="conversations-sidebar">
          <h2>Messages</h2>
          <input type="text" placeholder="Search conversations..." className="search-bar" />
          <div className="conversation-list">
            {conversations.map(convo => (
              <div
                key={convo.id}
                className={`conversation-item ${selectedConversation === convo.id ? 'active' : ''}`}
                onClick={() => setSelectedConversation(convo.id)}
              >
                <div className="conversation-info">
                  <strong>{convo.name}</strong>
                  <p className="last-message">{convo.lastMessage}</p>
                </div>
                {convo.unread > 0 && <span className="unread-count">{convo.unread}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Main message view */}
        <div className="message-view">
          <div className="message-header">
            <h3>{selectedConversation ? `Conversation with ${conversations.find(c => c.id === selectedConversation).name}` : 'Select a conversation to start chatting'}</h3>
            <button className="new-chat-btn" onClick={handleNewChat}>New Chat</button>
          </div>

          {selectedConversation ? (
            <>
              <div className="messages">
                {/* Placeholder for message bubbles */}
                <div className="message-bubble received">
                  <p>Hello! How are you doing?</p>
                </div>
                <div className="message-bubble sent">
                  <p>I'm doing well, thanks! How about you?</p>
                </div>
              </div>
              <div className="compose-message">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <p>Select a conversation to start chatting</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalMessaging;
