import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FlatList, View, Text, ScrollView } from 'react';


function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState('');


  const sendMessage = (event) => {
    event.preventDefault();

    console.log(sessionStorage.getItem('user').id)
    axios.post('http://127.0.0.1:8000/api/messages', {
      description: event.target.elements.desc.value,
      sender_id: JSON.parse(sessionStorage.getItem('user')).id,
      receiver_id: sessionStorage.getItem('targetUser')
    })
      .then(response => setMessages([...messages, response.data]))
      .catch(error => console.error(error));
    setMessages('');
  };



  return (

    <div>


      <form onSubmit={sendMessage}>
        <input
          name='desc'
        />

        <button type='submit'>Send Message</button>

      </form>





    </div>
  );
}

export default ChatRoom;
