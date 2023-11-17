import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BuyTickets.css';


const BuyTickets = () => {
 const [packageID, setPackageID] = useState(0);

 const handleBuyTicket = (id) => {
    setPackageID(id);
 };

 const packages = [
   { id: 1, name: 'Package 1', details: 'Details for Package 1' },
   { id: 2, name: 'Package 2', details: 'Details for Package 2' },
   { id: 3, name: 'Package 3', details: 'Details for Package 3' },
 ];

 return (
    <div className="buy-tickets">
      <h1 className="text-3xl font-medium">Buy Tickets</h1>
      <div className="packages">
        {packages.map((pack) => (
          <div key={pack.id} className="package">
            <h2 className="text-xl font-medium">{pack.name}</h2>
            <h2>{pack.details}</h2>
            <button><Link to={`/buy-tickets/${pack.id}`}>Buy Ticket</Link></button>
          </div>
        ))}
      </div>
    </div>
 );
};

export default BuyTickets;