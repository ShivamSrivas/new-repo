import React, { useState } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const message = inputValue.trim();
    if (message !== '') {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setInputValue('');
    }
  };

  return (
    <div style={{ width: '300px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ backgroundColor: msg.sender === 'user' ? '#007bff' : '#f0f0f0', color: msg.sender === 'user' ? '#fff' : '#000', padding: '8px 12px', marginBottom: '8px', borderRadius: '6px', maxWidth: '70%' }}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f9f9f9' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Send</button>
      </form>
    </div>
  );
};

export default Chatbox;
