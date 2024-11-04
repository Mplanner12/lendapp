import React, { useState } from "react";
import "../styles/Dashboard.scss";
import TopBar from "../components/TopBar";
import SidebarNav from "../components/SidebarNav";
import UserDashboard from "../components/UserDashboardL";

interface User {
  id: number;
  name: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", status: "Active" },
    { id: 2, name: "Jane Smith", status: "Inactive" },
  ]);

  const handleBlacklist = (id: number) => {
    console.log(`Blacklisting user with id ${id}`);
  };

  const handleActivate = (id: number) => {
    console.log(`Activating user with id ${id}`);
  };

  return (
    <div className="dashboard">
      <TopBar />
      <SidebarNav />
      {/* main content */}
      <main className="dashboard-content">
        <UserDashboard />
      </main>{" "}
    </div>
  );
};

export default Dashboard;
