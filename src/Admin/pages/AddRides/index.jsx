import React, { useState } from "react";
import Header from "../../components/Header";
import "../AddPackage/AddPackage.css"

export const AddRide = () => {
    const [RideId, setRideID] = useState('');
    const [rideImage, setrideImage] = useState('');
    const [RideDetails, setRideDetails] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const RideData = {
            rideName: RideId,
            rideDescription: RideDetails,
            rideImageLink: rideImage,
            adminToken: localStorage.getItem('admin-token')
          };

        try {
            const response = await fetch('http://localhost:4000/admin-add-rides', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(RideData),
            });
            
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            setRideID('');
            setRideDetails('');
            setrideImage('')
            
        }   catch (error) {
            console.error('Error:', error);
        }

    };

    return (
        <>
        <Header />
        <div className="add-package-container">
            <h1 className="text-3xl font-medium">Add a Ride</h1>

            <form className="add-package-form" onSubmit={handleSubmit}> 
                <label htmlFor="packageID">Ride Name</label>
                <input value={RideId} onChange={(e) => setRideID(e.target.value)} type="text" />

                <label htmlFor="packageName">Ride Image URL</label>
                <input value={rideImage} onChange={(e) => setrideImage(e.target.value)} type="text" />

                <label htmlFor="packageDetails">Ride Description</label>
                <input value={RideDetails} onChange={(e) => setRideDetails(e.target.value)} type="text" />

                <button className="add-package-button" type="submit">Add</button>
            </form>
        </div>
        </>
    );

};

export default AddRide;