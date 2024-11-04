import React from "react";
import "../styles/UserCard.scss";

interface UserCardProps {
  name: string;
  status: string;
  onBlacklist: () => void;
  onActivate: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  status,
  onBlacklist,
  onActivate,
}) => {
  return (
    <div className="user-card">
      <h2 className="user-card__name">{name}</h2>
      <p className="user-card__status">{status}</p>
      <div className="user-card__actions">
        <button
          onClick={onBlacklist}
          className="user-card__button user-card__button--blacklist"
        >
          Blacklist
        </button>
        <button
          onClick={onActivate}
          className="user-card__button user-card__button--activate"
        >
          Activate
        </button>
      </div>
    </div>
  );
};

export default UserCard;
