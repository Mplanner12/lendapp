import React, { useState } from "react";
import "../styles/TopBar.scss";
import { BsBell } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown, IoIosSearch } from "react-icons/io";

interface TopBarProps {
  user?: {
    name: string;
    avatar: string;
  };
  setSearchTerm: (term: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ user, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchTerm(inputValue); // Pass the input value up to Dashboard
  };
  return (
    <header className="header">
      <div className="header__left">
        <img
          src="/assets/Logo.png"
          alt="Lendsqr Logo"
          className="header__logo"
        />
        <h1 className="header__title">lendsqr</h1>
      </div>
      <div className="header__center">
        <div className="header__search">
          <input
            type="text"
            placeholder="Search for anything"
            className="header__search-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="header__search-button" onClick={handleSearch}>
            <IoIosSearch size={20} color="white" />
          </button>
        </div>
      </div>
      <div className="header__right">
        <a href="#" className="header__docs-link">
          Docs
        </a>
        <button className="header__notification-button">
          <img
            src="/assets/notf-icon.png"
            alt="Notification-logo"
            id="notification-icon"
          />
        </button>
        <div className="header__user-profile">
          <img
            src="/assets/user-image.png"
            alt="User Avatar"
            className="header__user-avatar"
          />
          <span className="header__user-name">Adedeji</span>
          <IoMdArrowDropdown size={20} color="#213F7D" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
