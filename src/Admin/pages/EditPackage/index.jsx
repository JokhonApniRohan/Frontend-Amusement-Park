import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import "./EditPackage.css";


const EditPackage = () => {
    const [packageInfo, setPackageInfo] = useState({
        packageId: '',
        packageName: '',
        packageDetails: '',
        price: '',
        availableTickets: ''
    });

    useEffect(() => {
        let url = new URL(window.location.href)

        setPackageInfo({...{
            packageId: url.searchParams.get('id'),
            packageName: url.searchParams.get('name'),
            packageDetails: url.searchParams.get('details'),
            price: url.searchParams.get('price'),
            availableTickets: url.searchParams.get('tickets')
        }})

        console.log(packageInfo)
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPackageInfo({ ...packageInfo, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        fetch('http://localhost:4000/update-package', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...packageInfo, adminToken: localStorage.getItem('admin-token') })
        }).then((res) => {
            window.location.href = 'http://localhost:3000/view-packages'
        })
    };

    return (
        <>
            <Header />
                <div className="edit-form-container">
                    <h2 className="text-3xl font-medium">Edit Package</h2>
                    <form className='edit-package-form' onSubmit={handleSubmit}>

                        <label htmlFor="packageID">Package ID:</label>
                        <input type="text" value={packageInfo.packageId} id="packageID" name="packageID" />

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