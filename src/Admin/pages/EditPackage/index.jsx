import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import "./EditPackage.css";


const EditPackage = () => {
    const [packageInfo, setPackageInfo] = useState({
        packageID: '',
        packageName: '',
        packageDetails: '',
        price: '',
        availableTickets: ''
    });

    useEffect(() => {
        fetchPackageInfo();
    }, []);

    const fetchPackageInfo = async () => {
        const response = await fetch(`http://localhost:4000/get-package/${packageInfo.packageID}`);
        const data = await response.json();
        setPackageInfo(data);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPackageInfo({ ...packageInfo, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const response = await fetch(`/http://localhost:4000/get-package/${packageInfo.packageID}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(packageInfo)
        // });

        // if (response.ok) {
        //     alert('Package information updated successfully');
        //     window.history.back();
        // } else {
        //     alert('Failed to update package information');
        // }
    };

    return (
        <>
            <Header />
                <div className="edit-form-container">
                    <h2 className="text-3xl font-medium">Edit Package</h2>
                    <form className='edit-package-form' onSubmit={handleSubmit}>

                        <label htmlFor="packageID">Package ID:</label>
                        <input type="text" value={packageInfo.packageID} id="packageID" name="packageID" />

                        <label htmlFor="packageName">Package Name:</label>
                        <input type="text" value={packageInfo.packageName} onChange={handleInputChange} id="packageName" name="packageName" />

                        <label htmlFor="packageDetails">Package Details:</label>
                        <input type="text" value={packageInfo.packageDetails} onChange={handleInputChange} id="packageDetails" name="packageDetails" />

                        <label htmlFor="price">Price:</label>
                        <input type="text" value={packageInfo.price} onChange={handleInputChange} id="price" name="price" />

                        <label htmlFor="availableTickets">Available Tickets:</label>
                        <input type="number" value={packageInfo.availableTickets} onChange={handleInputChange} id="availableTickets" name="availableTickets" />

                        <button className='edit-button' type="submit">Update Package</button>
                    
                    </form>
                </div>

        </>
    );
}

export default EditPackage;