// src/App.js
import React, { useState, useEffect } from 'react';
import NavComponent from './components/navbar/Navbar';
import BuildingList from './components/buildingList';
import RegisterModal from './components/Auth/RegisterModal';
function App() {
  const [buildings] = useState([]);
  const [links] = useState([
    { href: "#home", label: "Home" },
    { href: "#link", label: "Link" },
    { href: "#action/3.1", label: "Action" },
    { href: "#action/3.2", label: "Another action" },
    { href: "#action/3.3", label: "Something" },
  ]);

  useEffect(() => {
    // Fetch buildings or other data
    // Example:
    // setBuildings([{ id: 1, name: 'Building 1' }, { id: 2, name: 'Building 2' }]);
  }, []);

  return (
    <div>
      <NavComponent links={links} buildings={buildings} />
      <div className="container mt-3">

        <BuildingList buildings={buildings} />
        <RegisterModal />
      </div>
    </div>
  );
}

export default App;
