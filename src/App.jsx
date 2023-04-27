import React, { useEffect, useState } from 'react';
import './App.css';
import ChatRoom from './Components/ChatRoom';
import ChatDisplay from './Components/ChatDisplay';
import Login from './Components/Login';
import DisplayUsers from './Components/DisplayUsers';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    if (sessionStorage.getItem('user') != null)
      handleLoginSuccess();
  }, [])

  const handleLoginSuccess = () => {
    document.title = JSON.parse(sessionStorage.getItem('user')).username
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && (
        <>
          <ChatDisplay />
          <ChatRoom />
          <DisplayUsers />
        </>
      )}
    </div>
  );
}

export default App;
