


import React, { useState } from "react";



const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
    // handle sign-up logic here
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
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
        <br/>
        <label htmlFor="confirmPassword">Confirm Password:</label>
<input
  type="password"
  id="confirmPassword"
  value={confirmPassword}
  onChange={(event) => setConfirmPassword(event.target.value)}
  required
/>
        <br />
        <label>
          <input type="checkbox" required /> I agree to the terms & conditions
          and privacy policy.
        </label>
        <br />
        <button type="submit">Sign Up</button>
</form>
</div>
  )}
   

  export default SignUpPage;