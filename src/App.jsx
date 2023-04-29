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
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!isLoggedIn && (
        <>
          <div style={{ marginRight: "20px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Login onLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Register onLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
        </>
      )}
      {isLoggedIn && (
        <>
          <ChatDisplay />
          <ChatRoom />
          <DisplayUsers />
          <button
            onClick={() => {
              sessionStorage.clear();
              setIsLoggedIn(false);
              window.location.reload();
            }}
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
}

export default App;
