import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
//import { Nav } from './components/navbar';
import '../BuildingList.css';

const BuildingList = () => {
    const [buildings, setBuildings] = useState([]);
    const [selectedBuilding, setSelectedBuilding] = useState(null);
    const [setSelectedImageIndex] = useState(0); // Tambahkan definisi variabel

    useEffect(() => {
        // Code to fetch building data from backend
        // For now, mock data is used
        const mockData = [
            { id: 1, name: 'MOdern House', location: 'City A', rent: '$1000', image: 'https://media.istockphoto.com/id/1445333367/id/foto/eksterior-villa-modern-mewah-dengan-kolam-renang-dan-taman.jpg?s=1024x1024&w=is&k=20&c=lcuTBCGXQZp-ZJAiO2A2Vbe4rIL5Ebcal4VwTRN5oPo=' },
            { id: 2, name: 'Classic House', location: 'City B', rent: '$1500', image: 'https://media.istockphoto.com/id/174639624/id/foto/eksterior-rumah-pinggiran-kota.jpg?s=1024x1024&w=is&k=20&c=ibTpfiGE2dycNnjgwywvpKxnPYKhi0RHFmSk2I0Xr28=' },
            { id: 3, name: 'Villa', location: 'City C', rent: '$1200', image: ['https://media.istockphoto.com/id/479767332/id/foto/rumah-indah-dengan-teras-tertutup.jpg?s=1024x1024&w=is&k=20&c=skJA64wnrpZjyAWgSMaC9zWnKXonKlgq61eSSddduQY=',] }
        ];
        setBuildings(mockData);
    }, []);

    const handleBuildingClick = (building) => {
        setSelectedBuilding(building);
    };

    const handleCloseModal = () => {
        setSelectedBuilding(null);
        setSelectedImageIndex(0); // Reset selected image index when modal is closed
    };

    const handleNextImage = () => {
        if (selectedBuilding && selectedBuilding.images && selectedBuilding.images.length > 0) {
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedBuilding.images.length);
        }
    };
    
    const handlePrevImage = () => {
        if (selectedBuilding && selectedBuilding.images && selectedBuilding.images.length > 0) {
            setSelectedImageIndex((prevIndex) => (prevIndex + selectedBuilding.images.length - 1) % selectedBuilding.images.length);
        }
    };
    

    return (
        <div className="building-list-container">
            <h1 className="building-list-title">Available Buildings for Rent</h1>
            <div className="building-list">
                {buildings.map(building => (
                    <div key={building.id} className="building-item" onClick={() => handleBuildingClick(building)}>
                        <img src={building.image} alt={building.name} className="building-image" />
                        <h3>{building.name}</h3>
                        <p><strong>Location:</strong> {building.location}</p>
                        <p><strong>Rent:</strong> {building.rent}</p>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={selectedBuilding !== null}
                onRequestClose={handleCloseModal}
                contentLabel="Building Details"
            >
                {selectedBuilding && (
                    <div>
                        <img src={selectedBuilding.image} alt={selectedBuilding.name} className="modal-image" />
                        <div>
                            <button onClick={handlePrevImage}>Previous</button>
                            <button onClick={handleNextImage}>Next</button>
                        </div>
                        <h2>{selectedBuilding.name}</h2>
                        <p><strong>Location:</strong> {selectedBuilding.location}</p>
                        <p><strong>Rent:</strong> {selectedBuilding.rent}</p>
                        <button onClick={handleCloseModal}
                        >Close</button>
                        
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default BuildingList;
