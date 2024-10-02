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
            <button onClick={handleBooking}>Book Now</button>
            <button onClick={handleCloseModal}>Close</button>

        </div>
    )}
</Modal>
