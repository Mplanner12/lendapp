import React from "react";
import { LuUser2 } from "react-icons/lu";
import "../styles/UserDetails.scss";

export interface UserDetailsProps {
  user: {
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
  };
}

const UserDetails: React.FC<{
  user: UserDetailsProps["user"];
  setSelectedUser: any;
}> = ({ user, setSelectedUser }) => {
  return (
    <div className="user-details">
      <div className="user-details__header">
        <span
          onClick={() => setSelectedUser(null)}
          className="user-details__back-link"
        >
          <img src="/assets/back-icon.png" alt="back-logo" /> Back to Users
        </span>
      </div>

      <div className="user-details__title-row">
        <h1>User Details</h1>
        <div className="user-details__actions">
          <button className="user-details__action-btn user-details__action-btn--blacklist">
            BLACKLIST USER
          </button>
          <button className="user-details__action-btn user-details__action-btn--activate">
            ACTIVATE USER
          </button>
        </div>
      </div>

      <div className="user-details__profile">
        <div className="user-details__avatar">
          <div className="user-details__avatar-placeholder">
            {user.personalInfo.image ? (
              <img src={`assets/${user.personalInfo.image}`} alt="" />
            ) : (
              <LuUser2 id="user-avatar" />
            )}
          </div>
        </div>
        <div className="user-details__user-info">
          <h2>{user.personalInfo.fullName}</h2>
          <p>{user.id}</p>
        </div>
        <div className="user-details__user-tier">
          <p>User's Tier</p>
          <div className="user-details__stars">
            {"★".repeat(user.tier)}
            {"☆".repeat(3 - user.tier)}
          </div>
        </div>
        <div className="user-details__account-info">
          <h3>{user.balance}</h3>
          <p>{user.bankName}</p>
        </div>
      </div>

      <div className="user-details__tabs">
        <button className="user-details__tab user-details__tab--active">
          General Details
        </button>
        <button className="user-details__tab">Documents</button>
        <button className="user-details__tab">Bank Details</button>
        <button className="user-details__tab">Loans</button>
        <button className="user-details__tab">Savings</button>
        <button className="user-details__tab">App and System</button>
      </div>

      <div className="user-details__content">
        <section className="user-details__section">
          <h3>Personal Information</h3>
          <div className="user-details__grid">
            <div className="user-details__field">
              <label>FULL NAME</label>
              <p>{user.personalInfo.fullName}</p>
            </div>
            <div className="user-details__field">
              <label>PHONE NUMBER</label>
              <p>{user.personalInfo.phoneNumber}</p>
            </div>
            <div className="user-details__field">
              <label>EMAIL ADDRESS</label>
              <p>{user.personalInfo.email}</p>
            </div>
            <div className="user-details__field">
              <label>BVN</label>
              <p>{user.personalInfo.bvn}</p>
            </div>
            <div className="user-details__field">
              <label>GENDER</label>
              <p>{user.personalInfo.gender}</p>
            </div>
            <div className="user-details__field">
              <label>MARITAL STATUS</label>
              <p>{user.personalInfo.maritalStatus}</p>
            </div>
            <div className="user-details__field">
              <label>CHILDREN</label>
              <p>{user.personalInfo.children}</p>
            </div>
            <div className="user-details__field">
              <label>TYPE OF RESIDENCE</label>
              <p>{user.personalInfo.typeOfResidence}</p>
            </div>
          </div>
        </section>

        <section className="user-details__section">
          <h3>Education and Employment</h3>
          <div className="user-details__grid">
            <div className="user-details__field">
              <label>LEVEL OF EDUCATION</label>
              <p>{user.education.level}</p>
            </div>
            <div className="user-details__field">
              <label>EMPLOYMENT STATUS</label>
              <p>{user.education.employmentStatus}</p>
            </div>
            <div className="user-details__field">
              <label>SECTOR OF EMPLOYMENT</label>
              <p>{user.education.sector}</p>
            </div>
            <div className="user-details__field">
              <label>DURATION OF EMPLOYMENT</label>
              <p>{user.education.duration}</p>
            </div>
            <div className="user-details__field">
              <label>OFFICE EMAIL</label>
              <p>{user.education.officeEmail}</p>
            </div>
            <div className="user-details__field">
              <label>MONTHLY INCOME</label>
              <p>{user.education.monthlyIncome}</p>
            </div>
            <div className="user-details__field">
              <label>LOAN REPAYMENT</label>
              <p>{user.education.loanRepayment}</p>
            </div>
          </div>
        </section>

        <section className="user-details__section">
          <h3>Socials</h3>
          <div className="user-details__grid">
            <div className="user-details__field">
              <label>TWITTER</label>
              <p>{user.socials.twitter}</p>
            </div>
            <div className="user-details__field">
              <label>FACEBOOK</label>
              <p>{user.socials.facebook}</p>
            </div>
            <div className="user-details__field">
              <label>INSTAGRAM</label>
              <p>{user.socials.instagram}</p>
            </div>
          </div>
        </section>

        <section className="user-details__section">
          <h3>Guarantor</h3>
          <div className="user-details__grid">
            <div className="user-details__field">
              <label>FULL NAME</label>
              <p>{user.guarantor.fullName}</p>
            </div>
            <div className="user-details__field">
              <label>PHONE NUMBER</label>
              <p>{user.guarantor.phoneNumber}</p>
            </div>
            <div className="user-details__field">
              <label>EMAIL ADDRESS</label>
              <p>{user.guarantor.email}</p>
            </div>
            <div className="user-details__field">
              <label>RELATIONSHIP</label>
              <p>{user.guarantor.relationship}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDetails;
