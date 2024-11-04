import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "../styles/SidebarNav.scss";

const SidebarNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="organization-switcher">
            <img src="assets/org-icon.png" alt="org-logo" /> Switch Organization{" "}
            <span>
              <FaAngleDown size={16} color="#213f7d" />
            </span>
          </button>
        </div>
        <ul className="sidebar-menu">
          <li id="dashboard-icon">
            <img src="assets/d-Home.png" alt="Logo" /> Dashboard
          </li>
          <li className="menu-header">CUSTOMERS</li>
          <li className="active">
            <img src="/assets/users-icon.png" alt="users-logo" /> Users
          </li>
          <li>
            <img src="/assets/guarantors.png" alt="guarantors-logo" />{" "}
            Guarantors
          </li>
          <li>
            <img src="/assets/loans-icon.png" alt="loans-logo" /> Loans
          </li>
          <li>
            <img src="/assets/decision-icon.png" alt="decision-logo" /> Decision
            Models
          </li>
          <li>
            <img src="/assets/savings-icon.png" alt="savings-logo" /> Savings
          </li>
          <li>
            <img src="/assets/Lrequest-icon.png" alt="Lrequest-logo" /> Loan
            Requests
          </li>
          <li>
            <img src="/assets/whitelist-icon.png" alt="whitelist-logo" />{" "}
            Whitelist
          </li>
          <li>
            <img src="/assets/karma-icon.png" alt="karma-logo" /> Karma
          </li>
          <li className="menu-header">BUSINESSES</li>
          <li>
            <img src="/assets/org-icon.png" alt="org-logo" /> Organization
          </li>
          <li>
            <img src="/assets/Lrequest-icon.png" alt="Lrequest-logo" /> Loan
            Products
          </li>
          <li>
            <img src="assets/savingsP-icon.png" alt="savingsP-logo" /> Savings
            Products
          </li>
          <li>
            <img src="/assets/fee&charges-icon.png" alt="fee&charges-logo" />{" "}
            Fees and Charges
          </li>
          <li>
            <img src="/assets/transactions-icon.png" alt="transactions-logo" />{" "}
            Transactions
          </li>
          <li>
            <img src="/assets/services-icon.png" alt="services-logo" /> Services
          </li>
          <li>
            <img src="/assets/serviceA-icon.png" alt="serviceA-logo" /> Service
            Account
          </li>
          <li>
            <img src="/assets/settlements-icon.png" alt="settlements-logo" />{" "}
            Settlements
          </li>
          <li>
            <img src="/assets/settlements-icon.png" alt="settlements-logo" />{" "}
            Reports
          </li>
          <li className="menu-header">SETTINGS</li>
          <li>
            <img src="/assets/preferences-icon.png" alt="preferences-logo" />{" "}
            Preferences
          </li>
          <li>
            <img src="/assets/fees&pricing-icon.png" alt="fees&pricing-logo" />{" "}
            Fees and Pricing
          </li>
          <li>
            <img src="/assets/audit-icon.png" alt="audit-logo" /> Audit Logs
          </li>
          <li>
            <img
              src="/assets/systems-messages-icon.png"
              alt="systems-messages-logo"
            />
            Systems Messages
          </li>
          <div id="log-out-border"></div>
          <li id="log-out">
            <img src="/assets/log-out-icon.png" alt="log-out-logo" />
            LogOut
          </li>
          <li className="version">v1.2.0</li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNav;
