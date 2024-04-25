// BuildingModal.js

import React from 'react';
import Modal from 'react-modal';

const BuildingModal = ({ selectedBuilding, selectedImageIndex, handleCloseModal }) => {
    const handleNextImage = () => {
        // logika untuk menampilkan gambar selanjutnya
    };

    const handlePrevImage = () => {
        // logika untuk menampilkan gambar sebelumnya
    };

    const handleBooking = () => {
        // logika untuk menangani booking
        // contoh: redirect ke halaman booking
        window.location.href = '/booking-page'; // ganti dengan URL halaman booking yang sesuai
    };

    return (
        <Modal
            isOpen={selectedBuilding !== null}
            onRequestClose={handleCloseModal}
            contentLabel="Building Details"
        >
            {selectedBuilding && (
                <div>
                    <img src={selectedBuilding.images[selectedImageIndex]} alt={selectedBuilding.name} className="modal-image" />
                    <div>
                        <button onClick={handlePrevImage}>Previous</button>
                        <button onClick={handleNextImage}>Next</button>
                    </div>
                    <h2>{selectedBuilding.name}</h2>
                    <p><strong>Location:</strong> {selectedBuilding.location}</p>
                    <p><strong>Rent:</strong> {selectedBuilding.rent}</p>
                    <button onClick={handleCloseModal}>Close</button>
                    <button onClick={handleBooking}>Book Now</button> {/* Tombol booking */}
                </div>
            )}
        </Modal>
    );
}

export default BuildingModal;
