import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BuyTickets.css';
import Header from '../../components/Header';


const BuyTickets = () => {
  const [packages, setPackages] = useState([]);
  const [packageID, setPackageID] = useState(0)

  useEffect(() => {
    fetch('http://localhost:4000/get-package')
      .then((response) => response.json())
      .then((data) => { setPackages(data); console.log(data)})
      .catch((error) => console.error('Error:', error));
  }, []);


 const handleBuyTicket = (id) => {
    setPackageID(id);
 };

//  const packages = [
//    { id: 1, name: 'Package 1', details: 'Details for Package 1', ticketsAvailable:2 },
//    { id: 2, name: 'Package 2', details: 'Details for Package 2', ticketsAvailable:1 },
//    { id: 3, name: 'Package 3', details: 'Details for Package 3', ticketsAvailable:0 },
//  ];

 return (
  <>
  <Header />
    <div className="buy-tickets">
      <h1 className="text-3xl font-medium">Buy Tickets</h1>
      <div className="packages">
        {packages.map((pack) => (
          <div key={pack.packageID} className="package">
            <h2 className="text-xl font-medium">{pack.PackageName}</h2>
            <h2>{pack.PackageDetails}</h2>
            <h2>tickets available: {pack.AvailableTickets}</h2>
            {pack.AvailableTickets > 0 ? (
              <button onClick={() => handleBuyTicket(pack.packageID)}>
                <Link to={`/buy-tickets/${pack.packageID}`}>Buy Ticket</Link>
              </button>
              ) : (
              <p>Sorry! tickets for this package are currently unavailable</p>
            )}
            
          </div>
        ))}
      </div>
    </div>
    </>
 );
};

export default BuyTickets;