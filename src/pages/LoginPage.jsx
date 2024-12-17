import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const response = await axios.post("http://3.110.108.239:8080/api/v1/admin/login", {
                email,
                password,
            });

            // Check if the response is successful
            if (response.data.response.success) {
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
            } else {
                setError(response.data.response.message || "Invalid credentials, please try again.");
            }
        } catch (err) {
            // Handle error message from the server
            if (err.response && err.response.data && err.response.data.response) {
                setError(err.response.data.response.message);
            } else {
                setError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className="page-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* Password Field */}
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {/* Error Message */}
                {error && <p style={{ color: "red" }}>{error}</p>}

                {/* Submit Button */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
