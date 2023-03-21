

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    const defaultUsername = "user123";
    const defaultPassword = "password123";
  
    if (emailOrPhone === defaultUsername && password === defaultPassword) {
      // Navigate to home page upon successful validation
      window.location.href = "/home";
    } else {
      // Show error message for incorrect credentials
      alert("Incorrect username or password.");
    }
    // handle sign-in logic here
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label htmlFor="emailOrPhone">Email or Phone Number:</label>
        <input
          type="text"
          id="emailOrPhone"
          value={emailOrPhone}
          onChange={(event) => setEmailOrPhone(event.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p>
        <Link to="/forgotpassword">Forgot Password</Link>
      </p>
    </div>
  );
};

export default SignInPage;

