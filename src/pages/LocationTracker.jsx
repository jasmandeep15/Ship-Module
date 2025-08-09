import React, { useState, useEffect } from "react";
import "./LocationTracker.css";

// Dummy data for crew members
const crewMembers = [
  {
    id: 1,
    name: "John Smith",
    position: "Chief Engineer",
    locationCode: "110000",
  },
  {
    id: 2,
    name: "Maria Garcia",
    position: "First Officer",
    locationCode: "101000",
  },
  {
    id: 3,
    name: "Robert Johnson",
    position: "Safety Officer",
    locationCode: "111000",
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "Deck Cadet",
    locationCode: "100100",
  },
  { id: 5, name: "James Brown", position: "Bosun", locationCode: "110100" },
  {
    id: 6,
    name: "Emily Davis",
    position: "Chief Cook",
    locationCode: "100010",
  },
  {
    id: 7,
    name: "Michael Wilson",
    position: "Electrical Officer",
    locationCode: "111100",
  },
  {
    id: 8,
    name: "Jennifer Lee",
    position: "Medical Officer",
    locationCode: "100001",
  },
];

// Gate locations on the ship
const gates = [
  { id: 1, name: "Main Entrance", description: "Primary access point" },
  { id: 2, name: "Engine Room", description: "Engineering section" },
  { id: 3, name: "Bridge", description: "Navigation control" },
  { id: 4, name: "Galley", description: "Kitchen area" },
  { id: 5, name: "Medical Bay", description: "Healthcare facility" },
  { id: 6, name: "Crew Quarters", description: "Living accommodations" },
];

function LocationTracker() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCrew, setFilteredCrew] = useState(crewMembers);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter crew members based on search term
  useEffect(() => {
    const filtered = crewMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCrew(filtered);
  }, [searchTerm]);

  // Determine current location based on location code
  const getCurrentLocation = (locationCode) => {
    for (let i = locationCode.length - 1; i >= 0; i--) {
      if (locationCode[i] === "1") {
        return gates[i] ? gates[i].name : "Unknown Location";
      }
    }
    return "Not Located";
  };

  // Get location status for each gate
  const getLocationStatus = (locationCode, gateIndex) => {
    if (gateIndex < locationCode.length) {
      return locationCode[gateIndex] === "1" ? "passed" : "not-passed";
    }
    return "not-passed";
  };

  return (
    <div className="location-tracker">
      <div className="header">
        <h1>Location Tracker</h1>
        <div className="time-display">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search crew members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="gates-overview">
        <h2>Ship Gates Overview</h2>
        <div className="gates-grid">
          {gates.map((gate) => (
            <div key={gate.id} className="gate-card">
              <h3>{gate.name}</h3>
              <p>{gate.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="crew-grid">
        {filteredCrew.map((member) => (
          <div key={member.id} className="crew-card">
            <div className="crew-header">
              <h3>{member.name}</h3>
              <span className="position">{member.position}</span>
            </div>
            <div className="location-info">
              <div className="current-location">
                Current Location:{" "}
                <strong>{getCurrentLocation(member.locationCode)}</strong>
              </div>
              <div className="location-history">
                {gates.map((gate, index) => (
                  <div key={gate.id} className="gate-status">
                    <span
                      className={`status-indicator ${getLocationStatus(
                        member.locationCode,
                        index
                      )}`}
                    >
                      {gate.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationTracker;
