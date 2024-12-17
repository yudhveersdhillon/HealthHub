import React from "react";
import "../styles/components/Sidebar.css"; // Sidebar-specific styles

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="menu-list">
        <li className="menu-item">Staff</li>
        <li className="menu-item">Doctors</li>
        <li className="menu-item">Pharmacy</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
