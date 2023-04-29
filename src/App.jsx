import React, { useEffect, useState } from 'react';
import './App.css';
import ChatRoom from './Components/ChatRoom';
import ChatDisplay from './Components/ChatDisplay';
import Login from './Components/Login';
import DisplayUsers from './Components/DisplayUsers';
import Register from './Components/Register';

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
      {!isLoggedIn && (
        <>
          <Login onLoginSuccess={handleLoginSuccess} />
          <div>
            Create a user ?
          </div>
          <Register onLoginSuccess={handleLoginSuccess} />
        </>
      )}
      {isLoggedIn && (
        <>
          <ChatDisplay />
          <ChatRoom />
          <DisplayUsers />
          <button onClick={() => {
            sessionStorage.clear();
            setIsLoggedIn(false);
            window.location.reload()
          }}>Log out</button>

        </>
      )}
    </div>
  );
}

export default App;
