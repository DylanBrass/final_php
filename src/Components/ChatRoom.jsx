import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FlatList, View, Text, ScrollView } from 'react';


function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState('');


  const sendMessage = (event) => {
    event.preventDefault();
    axios.post('/api/messages', { message: newMessages })
      .then(response => setMessages([...messages, response.data]))
      .catch(error => console.error(error));
    setMessages('');
  };

  function sendMessages() {
    alert("You have sent a message")
  }

  return (

    <div>


      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessages}
          onChange={(event) => setNewMessages(event.target.value)} />


      </form>
      <button onClick={sendMessages}>Send Message</button>

      {/* Render chat messages here */}
      {/* Render input field and send button here */}
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>




    </div>
  );
}

export default ChatRoom;
