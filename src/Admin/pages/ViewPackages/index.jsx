import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ViewPackages.css';
import Header from '../../components/Header';


const ViewPackages = () => {
 const [packages, setPackages] = useState([]);
 const [adminToken, setAdminToken] = useState(null);

 useEffect(() => {
    const token = localStorage.getItem('admin-token');
        if (token) {
            setAdminToken(token);
    };
    fetch('http://localhost:4000/get-package')
      .then((response) => response.json())
      .then((data) => { setPackages(data); console.log(data)})
      .catch((error) => console.error('Error:', error));
  }, []);

 const handleDelete = async (packageId) => {
    if (window.confirm(`Delete package no.${packageId}?`)) {
        try {
            await fetch(`/http://localhost:4000/admin-remove-package/${packageId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ packageId, adminToken }),
            });

            const response = await fetch('http://localhost:4000/get-package');
            const data = await response.json();
            setPackages(data);

        }   catch (error) {
            console.error('Error:', error);
        }
    }
 };

 return (
    <>
        <Header />
            <div className='view-packages'>
            <h1 className="text-3xl font-medium">Packages</h1>
            <table className='pack-list'>
                <thead>
                <tr>
                    <th>Package ID</th>
                    <th>Package Name</th>
                    <th>Package Details</th>
                    <th>Price</th>
                    <th>Available Tickets</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {packages.map((pack) => (
                    <tr key={pack.PackageID}>
                    <td>{pack.PackageID}</td>
                    <td>{pack.PackageName}</td>
                    <td>{pack.PackageDetails}</td>
                    <td>{pack.Price}</td>
                    <td>{pack.AvailableTickets}</td>
                    <td>
                        <button className='edit-button'><Link to={`/edit-package/${pack.PackageID}`}>Edit</Link></button>
                        <button className='delete-button' onClick={() => handleDelete(pack.PackageID)}>Delete</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

    </>
 );
};

export default ViewPackages;