import React, { useState } from "react";
import "../styles/UserDashboard.scss";
import { IoFilterSharp } from "react-icons/io5";
import FilterMenu from "./FilterMenu";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import UserDetails from "./UserDetails";

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

// interface UserDetailsProps {
//   name: string;
//   id: string;
//   tier: number;
//   balance: string;
//   bankName: string;
//   personalInfo: {
//     fullName: string;
//     image: string;
//     phoneNumber: string;
//     email: string;
//     bvn: string;
//     gender: string;
//     maritalStatus: string;
//     children: string;
//     typeOfResidence: string;
//   };
//   education: any;
//   socials: any;
//   guarantor: any;
// }

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Active",
      // Add sample user details
      id: "USR001",
      tier: 2,
      balance: "₦50,000",
      bankName: "GT Bank",
      personalInfo: {
        fullName: "Adedeji John Doe",
        image: "",
        phoneNumber: "08078903721",
        email: "adedeji@lendsqr.com",
        bvn: "12345678901",
        gender: "Male",
        maritalStatus: "Single",
        children: "None",
        typeOfResidence: "Rented Apartment",
      },
      education: {
        level: "BSc",
        employmentStatus: "Employed",
        sector: "Technology",
        duration: "2 years",
        officeEmail: "adedeji.doe@example.com",
        monthlyIncome: "₦250,000",
        loanRepayment: "₦50,000",
      },
      socials: {
        twitter: "@adedeji",
        facebook: "facebook.com/adedeji",
        instagram: "@adedeji",
      },
      guarantor: {
        fullName: "Guarantor Name",
        phoneNumber: "08012345678",
        email: "guarantor@example.com",
        relationship: "Friend",
      },
    },
  ]);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [userActionMenuOpen, setUserActionMenuOpen] = useState<number | null>(
    null
  );
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const handleUserSelect = (user: UserData) => {
    setSelectedUser(user);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filterMenuOpen) setFilterMenuOpen(false);
    else {
      setFilterMenuOpen(true);
    }
  };

  const handleFilterApply = (filters: any) => {
    // Apply filters to users
    setFilterMenuOpen(false);
  };

  const handleUserActionClick = (index: number) => {
    setUserActionMenuOpen(userActionMenuOpen === index ? null : index);
  };

  return (
    <div className="user-dashboard">
      {!selectedUser ? (
        <div>
          <h1>Users</h1>
          <div className="statistics-cards">
            <div className="stat-card">
              <img src="/assets/users-stat-icon.png" alt="users-stat-logo" />
              <h3>USERS</h3>
              <p>2,453</p>
            </div>
            <div className="stat-card">
              <img src="/assets/active-users-icon.png" alt="users-stat-logo" />
              <h3>ACTIVE USERS</h3>
              <p>2,453</p>
            </div>
            <div className="stat-card">
              <img src="/assets/l-users-icon.png" alt="users-stat-logo" />
              <h3>USERS WITH LOANS</h3>
              <p>12,453</p>
            </div>
            <div className="stat-card">
              <img src="/assets/users-savings-icon.png" alt="users-stat-logo" />
              <h3>USERS WITH SAVINGS</h3>
              <p>102,453</p>
            </div>
          </div>
          <div className="user-table">
            <table>
              <thead>
                {/* <tr id="header-row">
              <th>
                ORGANIZATION{" "}
                <span className="filter-icon">
                  <IoFilterSharp size={15} />
                </span>
              </th>
              <th id="filter">
                USERNAME{" "}
                <span className="filter-icon">
                  <IoFilterSharp size={15} />
                </span>
              </th>
              <th id="filter">
                EMAIL{" "}
                <span className="filter-icon">
                  <IoFilterSharp size={15} />
                </span>
              </th>
              <th id="filter">
                PHONE NUMBER{" "}
                <span className="filter-icon">
                  <IoFilterSharp size={15} />
                </span>
              </th>
              <th>
                DATE JOINED{" "}
                <span className="filter-icon">
                  <IoFilterSharp size={15} />
                </span>
              </th>
              <th>
                STATUS{" "}
                <span className="filter-icon">
                  <IoFilterSharp size={15} />
                </span>
              </th>
              <th></th>
            </tr> */}
                <tr>
                  {[
                    "ORGANIZATION",
                    "USERNAME",
                    "EMAIL",
                    "PHONE NUMBER",
                    "DATE JOINED",
                    "STATUS",
                  ].map((header) => (
                    <th
                      key={header}
                      onClick={() => {
                        handleFilterClick(header);
                        console.log("closed");
                      }}
                    >
                      {header}
                      <span className="filter-icon">
                        <IoFilterSharp size={15} />
                      </span>
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.organization}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.dateJoined}</td>
                    <td>
                      <span
                        id="status"
                        className={`status ${user.status.toLowerCase()}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <span
                        className="options-icon"
                        onClick={() => handleUserActionClick(index)}
                      >
                        <PiDotsThreeOutlineVerticalFill />
                      </span>
                      {userActionMenuOpen === index && (
                        <div className="user-action-menu">
                          <button
                            id="action-button"
                            onClick={() => handleUserSelect(user)}
                          >
                            <img src="/assets/eye-icon.png" alt="eye-logo" />
                            View Details
                          </button>
                          <button id="action-button">
                            <img
                              src="/assets/blacklist-user-icon.png"
                              alt="blacklist-user-logo"
                            />
                            Blacklist User
                          </button>
                          <button id="action-button">
                            <img
                              src="/assets/activate-user-icon.png"
                              alt="activate-user-logo"
                            />
                            Activate User
                          </button>
                        </div>
                      )}{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FilterMenu
            isOpen={filterMenuOpen}
            onClose={() => setFilterMenuOpen(false)}
            onApply={handleFilterApply}
          />
          <div className="pagination">
            <div className="entries-dropdown">
              <span>Showing</span>
              <select>
                <option>100</option>
              </select>
              <span>out of 100</span>
            </div>
            <div className="page-numbers">
              <button className="prev">←</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <span>...</span>
              <button>15</button>
              <button>16</button>
              <button className="next">→</button>
            </div>
          </div>
        </div>
      ) : (
        <UserDetails user={selectedUser} setSelectedUser={setSelectedUser} />
      )}
    </div>
  );
};

export default UserDashboard;
