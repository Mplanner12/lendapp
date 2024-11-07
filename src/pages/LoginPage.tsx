import React, { useState } from "react";
import "../styles/LoginPage.scss";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;

    // Basic email validation
    if (!email) {
      setEmailError("Email is required");
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      hasErrors = true;
    } else {
      setEmailError("");
    }

    // Basic password validation
    if (!password) {
      setPasswordError("Password is required");
      hasErrors = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      hasErrors = true;
    } else {
      setPasswordError("");
    }

    // If there are no errors, login is proceeded with
    if (!hasErrors) {
      console.log("Login clicked", { email, password });
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <div className="header">
            <img src="/assets/Logo.png" alt="Login Illustration" />
            <h2>lendsqr</h2>
          </div>
          <div className="image-container">
            <img src="/assets/pablo.png" alt="" />
          </div>
        </div>
        <div className="login-right">
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="form-group">
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
                <span
                  className="show-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </span>
              </div>
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <a href="#" className="forgot-password">
              FORGOT PASSWORD?
            </a>
            <button
              type="submit"
              onClick={(e) => handleLogin(e)}
              className="login-button"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
