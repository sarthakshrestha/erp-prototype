import React, { useState } from 'react';
import "../styles/sign-in.css"

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
    return (
      <div className="signInContainer">
        <h2 className='sign-in-header'>Manager Sign In</h2>
        <form>
          <div>
            <label>Username</label><br></br><br></br>
            <input type="username" value={email} onChange={handleEmailChange} />
          </div><br></br>
          <div>
            <label>Password:</label><br></br><br></br>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div><br></br>
          <button>Login</button>
        </form>
      </div>
    );
  };

  export default SignIn;

