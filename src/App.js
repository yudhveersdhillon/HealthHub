import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import "./styles.css";

function App() {
  // Protect routes - check if the user is authenticated
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">HealthHub Product</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="signup-btn">
              Signup
            </Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="welcome-container">
      <h1>Welcome to HealthHub: Your Healthcare Data Management Solution 🚀</h1>
      <p>
        HealthHub is a comprehensive platform designed to streamline patient and hospital data management. 
        Whether you're a healthcare provider, hospital administrator, or a patient, our solution empowers you 
        to manage patient records, streamline hospital workflows, and improve patient care.
      </p>
      <p>
        Get started today by exploring the features that will enhance your hospital's operational efficiency, 
        improve clinical decision-making, and optimize patient outcomes. With real-time data access, secure 
        record management, and seamless integration with existing systems, HealthHub is your all-in-one solution for 
        healthcare management.
      </p>
      <p>
        <strong>Start building something amazing with HealthHub!</strong>  
      </p>
    </div>
  );
}

export default App;
