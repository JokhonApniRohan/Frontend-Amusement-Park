import React, { useState } from "react";
import Header from "../../components/Header";
import "./AddPackage.css";

export const AddPackage = () => {
    const [packageID, setPackageID] = useState('');
    const [packageName, setPackageName] = useState('');
    const [packageDetails, setPackageDetails] = useState('');
    const [availableTickets, setAvailableTickets] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
        <Header />
        <div className="add-package-container">
            <h1 className="text-3xl font-medium">Add Package</h1>

            <form className="add-package-form" onSubmit={handleSubmit}> 
                <label htmlFor="packageID">Package ID</label>
                <input value={packageID} onChange={(e) => setPackageID(e.target.value)} type="text" />

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