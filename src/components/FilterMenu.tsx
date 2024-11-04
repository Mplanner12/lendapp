import React from "react";
import "../styles/FilterMenu.scss";

interface FilterMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  if (!isOpen) return null;

  return (
    <div className="filter-menu">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onApply({});
        }}
      >
        <div className="filter-field">
          <label>Organization</label>
          <select name="organization">
            <option value="">Select</option>
          </select>
        </div>
        <div className="filter-field">
          <label>Username</label>
          <input type="text" name="username" placeholder="User" />
        </div>
        <div className="filter-field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="filter-field">
          <label>Date</label>
          <input type="date" name="date" />
        </div>
        <div className="filter-field">
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" placeholder="Phone Number" />
        </div>
        <div className="filter-field">
          <label>Status</label>
          <select name="status">
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>
        <div className="filter-actions">
          <button type="button" onClick={onClose}>
            Reset
          </button>
          <button type="submit">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterMenu;
