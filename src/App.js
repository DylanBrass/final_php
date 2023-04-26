import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import ChatRoom from './Components/ChatRoom';
import ChatDisplay from './Components/ChatDisplay';
import Login from './Components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && (
        <>
          <ChatDisplay />
          <ChatRoom />
        </>
      )}
    </div>
  );
}

export default App;
