import React, {useState, useEffect } from 'react';

function ChatRoom() {
   const sendMessage = (message) => {
    axios.post('/api/messages', message)
      .then(response => setMessages([...messages, response.data]))
      .catch(error => console.error(error));
  };
  
  function sendMessages(){
    alert("You have sent a message")
  } 
  <button onClick={sendMessages}>Send Message</button>
 
  return (
    <div>

     
      {/* Render chat messages here /}
      {/ Render input field and send button here */}
    </div>
  );
  }
export default ChatRoom;