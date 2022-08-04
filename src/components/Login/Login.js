import React , { useState } from 'react';
// Add in the PropType from 
// the new prop and destructure the props object 
// to pull out the setToken prop
import PropTypes from 'prop-types';

import './Login.css';


//  create a function to make a POST request to the server. 
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


export default function Login({setToken}) {
  // create a local state to capture the Username and Password
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  // submit handler
  // will call loginUser with the username and password
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}