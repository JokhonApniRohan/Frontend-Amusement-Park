import React, { useState } from 'react';
import "../AddPackage/AddPackage.css"
const ProductDeletePage = () => {
  const [rideName, setRideName] = useState('');
  const [message, setMessage] = useState('')

  const handleDelete = (e) => {
  fetch('http://localhost:4000/remove-ride', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      rideName: rideName,
      adminToken: localStorage.getItem('admin-token')
    })
  })
  .then((response) => {
    if (!response.ok) {
      if (response.status === 404) {
        setMessage("Ride not found");
      } else {
        setMessage("An error occurred");
      }
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    setMessage("Ride deleted");
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
    setMessage("An error occurred during deletion");
  });
};

  const handleInputChange = (e) => {
    setRideName(e.target.value)
  };

  return (
    <div className="add-package-container">
      <h1>Ride Delete Page</h1>
      <label>
        Enter Ride Name:
        <input type="text" value={rideName} onChange={handleInputChange} />
      </label>
      <button className="add-package-button" onClick={handleDelete}>Delete Ride</button>
      <p>{message}</p>
    </div>
  );
};

export default ProductDeletePage;