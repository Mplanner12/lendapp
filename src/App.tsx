import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
// import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/logIn" element={<LoginPage />} />
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/userDetails" element={<UserDetails />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
