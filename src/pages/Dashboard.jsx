import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
    // Local state to track if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to `true` for testing, replace with real login logic

    return (
        <div className="dashboard-container">
            {/* Conditionally render DashboardNavbar based on isLoggedIn state */}
            {isLoggedIn && <DashboardNavbar />}

            <div className="dashboard-main">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="dashboard-content">
                    <h2>Welcome to the Dashboard!</h2>
                    <p>You have successfully logged in.</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
