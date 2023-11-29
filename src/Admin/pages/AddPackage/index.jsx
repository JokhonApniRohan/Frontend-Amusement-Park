import React, { useState } from "react";
import Header from "../../components/Header";
import "./AddPackage.css";

export const AddPackage = () => {
    const [packageId, setPackageID] = useState('');
    const [packageName, setPackageName] = useState('');
    const [packageDetails, setPackageDetails] = useState('');
    const [availableTickets, setAvailableTickets] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const packageData = {
            packageId,
            packageName,
            packageDetails,
            availableTickets,
            adminToken: localStorage.getItem('admin-token')
          };

        try {
            const response = await fetch('http://localhost:4000/admin-add-package', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(packageData),
            });
            
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            setPackageID('');
            setPackageName('');
            setPackageDetails('');
            setAvailableTickets('');
            
        }   catch (error) {
            console.error('Error:', error);
        }

    };

    return (
        <>
        <Header />
        <div className="add-package-container">
            <h1 className="text-3xl font-medium">Add Package</h1>

            <form className="add-package-form" onSubmit={handleSubmit}> 
                <label htmlFor="packageID">Package ID</label>
                <input value={packageId} onChange={(e) => setPackageID(e.target.value)} type="text" />

                <label htmlFor="packageName">Package Name</label>
                <input value={packageName} onChange={(e) => setPackageName(e.target.value)} type="text" />

                <label htmlFor="packageDetails">Package Details</label>
                <input value={packageDetails} onChange={(e) => setPackageDetails(e.target.value)} type="text" />

                <label htmlFor="availableTickets">Available Tickets</label>
                <input value={availableTickets} onChange={(e) => setAvailableTickets(e.target.value)} type="text" />

                <button className="add-package-button" type="submit">Add</button>
            
            </form>
        </div>
        </>
    );

};

export default AddPackage;