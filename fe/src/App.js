import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BuildingList from './components/buildingList';
import '../src/styles.css';

const App = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    axios.get('/api/buildings')
      .then(response => {
        setBuildings(response.data);
      })
      .catch(error => {
        console.error('Error fetching buildings:', error);
      });
  }, []);

  return (
    <div className="app">
      <h1>List of Buildings that can be rented</h1>
      <BuildingList buildings={buildings} />
    </div>
  );
};

export default App;
