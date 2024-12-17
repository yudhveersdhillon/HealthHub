import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error handling
  const [success, setSuccess] = useState(""); // Success message

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear success message

    try {
      // API call to register user
      const response = await axios.post("http://3.110.108.239:8080/api/v1/admin/register", {
        name,
        email,
        phone,
        address,
        password,
      });

      // Handle successful registration
      if (response.data.response.success) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after success
        }, 1000);
      } else {
        // If registration fails
        setError(response.data.response.message || "Registration failed. Try again.");
      }
    } catch (err) {
      // Handle server or network errors
      setError(err.response?.data?.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="page-container">
      <h2>New Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email Field */}
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Phone Field */}
        <label>Phone:</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {/* Address Field */}
        <label>Address:</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        {/* Password Field */}
        <label>Password:</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Display Error and Success Messages */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        {/* Submit Button */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
