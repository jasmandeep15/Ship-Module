import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "LOCATION TRACKER",
      desc: "Track crew members\nLive location",
      path: "/location-tracker",
      maintenance: false,
    },
    {
      title: "DIGITAL DOC LOCKER",
      desc: "Ship all important\ndoc & certificates",
      path: "/under-maintenance",
      maintenance: true,
    },
    {
      title: "SHIP’S PLAN",
      desc: "Access to general plan\n& fire and safety plan",
      path: "/ship-plan",
      maintenance: false,
    },
    {
      title: "E-LEARNING",
      desc: "Real time demo\nPractical",
      path: "/under-maintenance",
      maintenance: true,
    },
    {
      title: "SAFETY DRILLS",
      desc: "Reminder to all safety\ndrill and procedure\nto be followed",
      path: "/under-maintenance",
      maintenance: true,
    },
    {
      title: "DUTIES & INSPECTION",
      desc: "Finish all task within the\ntime with live cam",
      path: "/under-maintenance",
      maintenance: true,
    },
    {
      title: "IMPORTANT NOTE",
      desc: "1245 hrs: MONDAY\n\nAll daily reminder and important schedule to be circulated by company side or master side to be notified here",
      path: "/under-maintenance",
      maintenance: true,
    },
    {
      title: "REST HOUR MANAGEMENT",
      desc: "Manages and notifies\ncrew related to\nrest/work hour",
      path: "/under-maintenance",
      maintenance: true,
    },
    {
      title: "MULTI LANGUAGE SUPPORT",
      desc: "",
      path: "/under-maintenance",
      maintenance: true,
    },
  ];

  const handleCardClick = (card) => {
    if (card.path) {
      navigate(card.path);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="welcome">Good Afternoon</h1>
      <div className="grid">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(card)}
            style={{ cursor: "pointer" }}
          >
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
