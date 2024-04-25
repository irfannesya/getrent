import React from 'react';

const BuildingItem = ({ building }) => {
  return (
    <div className="building">
      <h3>{building.name}</h3>
      <p>{building.description}</p>
      <p>Location: {building.location}</p>
      <p>Rent: ${building.rent}/month</p>
    </div>
  );
};

export default BuildingItem;
