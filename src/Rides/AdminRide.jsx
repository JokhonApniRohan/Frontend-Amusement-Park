import React, { useState } from 'react';

const RideManagementPage = () => {
  // State for storing the list of rides and the current search term
  const [rides, setRides] = useState([
    { id: 1, name: 'Roller Coaster', description: 'Thrilling ride', image: 'roller_coaster.jpg' },
    // Add more rides as needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newRide, setNewRide] = useState({ name: '', description: '', image: '' });

  // Function to handle ride deletion
  const handleDelete = (id) => {
    const updatedRides = rides.filter(ride => ride.id !== id);
    setRides(updatedRides);
  };

  // Function to handle ride addition
  const handleAddRide = () => {
    // Validation can be added here before adding the new ride
    const updatedRides = [...rides, { id: rides.length + 1, ...newRide }];
    setRides(updatedRides);
    // Clear the form after adding the ride
    setNewRide({ name: '', description: '', image: '' });
  };

  return (
    <div>
      <h1>Ride Management</h1>

      {/* Search Bar and Delete Button */}
      <div>
        <input
          type="text"
          placeholder="Search Ride"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button >Search</button>
      </div>

      {/* Display Rides and Delete Button */}
      <ul>
        {rides.map(ride => (
          <li key={ride.id}>
            {ride.name} - {ride.description}
            <button onClick={() => handleDelete(ride.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Add Ride Form */}
      <div>
        <h2>Add Ride</h2>
        <label>Ride Name:
          <input
            type="text"
            value={newRide.name}
            onChange={(e) => setNewRide({ ...newRide, name: e.target.value })}
          />
        </label>
        <br />
        <label>Ride Description:
          <input
            type="text"
            value={newRide.description}
            onChange={(e) => setNewRide({ ...newRide, description: e.target.value })}
          />
        </label>
        <br />
        <label>Ride Image:
          <input
            type="text"
            value={newRide.image}
            onChange={(e) => setNewRide({ ...newRide, image: e.target.value })}
          />
        </label>
        <br />
        <button onClick={handleAddRide}>Add Ride</button>
      </div>
    </div>
  );
};

export default RideManagementPage;
