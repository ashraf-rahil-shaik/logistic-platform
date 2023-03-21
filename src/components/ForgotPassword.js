import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = (event) => {
    event.preventDefault();
    // handle send OTP logic here
    setShowOtpInput(true);
  };

  const handleVerifyOtp = (event) => {
    event.preventDefault();
    // handle verify OTP logic here
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSendOtp}>
        <label htmlFor="mobileNumber">Registered Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
          required
        />
        <br />
        <button type="submit">Send OTP</button>
      </form>
      {showOtpInput && (
        <form onSubmit={handleVerifyOtp}>
          <label htmlFor="otp">OTP:</label>
          <input
            type="number"
            id="otp"
            value={otp}
            onChange={(event) => setOtp(event.target.value)}
            required
          />
          <br />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordPage;

