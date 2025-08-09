import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ShipPlan from "./pages/ShipPlan";
import LocationTracker from "./pages/LocationTracker";
import UnderMaintenance from "./pages/UnderMaintenance";
import "./App.css";
function App() {
  return (
    <Router basename="/Ship-Module">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ship-plan" element={<ShipPlan />} />
        <Route path="/location-tracker" element={<LocationTracker />} />
        <Route path="/under-maintenance" element={<UnderMaintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
