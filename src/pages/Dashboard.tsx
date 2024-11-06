import React, { useState } from "react";
import "../styles/Dashboard.scss";
import TopBar from "../components/TopBar";
import SidebarNav from "../components/SidebarNav";
import UserDashboard from "../components/UserDashboardL";
import usersData from "../data/User_DATA";

interface UserData {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Inactive" | "Pending" | "Blacklisted" | "Active";
  id: string;
  tier: number;
  balance: string;
  bankName: string;
  personalInfo: {
    fullName: string;
    image: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>(usersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className={`dashboard ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <TopBar setSearchTerm={setSearchTerm} toggleSidebar={toggleSidebar} />
      <SidebarNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* main content */}
      <main className="dashboard-content">
        <UserDashboard users={users} searchTerm={searchTerm} />
      </main>{" "}
    </div>
  );
};

export default Dashboard;
