import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLoginSuccess }) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement API call to authenticate user
    axios
      .post('http://127.0.0.1:8000/api/users/login', { username, password })
      .then((response) => {
        if (response.status === 200) {
          if (response.data != []) {
            sessionStorage.setItem('user', JSON.stringify(response.data));
            onLoginSuccess(); // Call onLoginSuccess when login is successful
          }
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };




  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
