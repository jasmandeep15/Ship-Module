import React, { useState } from "react";
import "./ShipPlan.css";

const sections = [
  {
    label: "General Plan",
    content:
      "Overview of the ship’s general layout including compartments and structural design.",
  },
  {
    label: "Fire Extinguisher",
    content: "Fire extinguisher locations and types onboard.",
  },
  {
    label: "LSA",
    content: "Life Saving Appliances like lifeboats, jackets, and rafts.",
  },
  {
    label: "Mooring Station",
    content: "Deck area where mooring operations are conducted.",
  },
  {
    label: "Accommodation",
    content: "Living quarters for the crew, including cabins and mess.",
  },
  {
    label: "Engine Room",
    content: "Detailed structure of main engine compartment and systems.",
  },
];

function ShipPlan() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="ship-plan">
      <h1>Ship’s Plan</h1>
      <div className="tabs">
        {sections.map((section, idx) => (
          <button
            key={idx}
            className={`tab ${idx === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <p>{sections[activeTab].content}</p>
      </div>

      <div className="model-container">
        <iframe
          title="3D Ship Model"
          src="https://sketchfab.com/models/8051f4c9b421451a87ce32f596f9f4f0/embed"
          frameBorder="0"
          allow="autoplay; fullscreen; vr"
          width="100%"
          height="400px"
        ></iframe>
      </div>
    </div>
  );
}

export default ShipPlan;
