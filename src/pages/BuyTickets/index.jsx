import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BuyTickets.css';
import Header from '../../components/Header';


const BuyTickets = () => {
 const [packageID, setPackageID] = useState(0);
 const [ticketsAvailable, setTicketsAvailable] = useState(true);

 const handleBuyTicket = (id) => {
    setPackageID(id);
 };

 const packages = [
   { id: 1, name: 'Package 1', details: 'Details for Package 1', ticketsAvailable:2 },
   { id: 2, name: 'Package 2', details: 'Details for Package 2', ticketsAvailable:1 },
   { id: 3, name: 'Package 3', details: 'Details for Package 3', ticketsAvailable:0 },
 ];

 return (
  <>
  <Header />
    <div className="buy-tickets">
      <h1 className="text-3xl font-medium">Buy Tickets</h1>
      <div className="packages">
        {packages.map((pack) => (
          <div key={pack.id} className="package">
            <h2 className="text-xl font-medium">{pack.name}</h2>
            <h2>{pack.details}</h2>
            <h2>tickets available: {pack.ticketsAvailable}</h2>
            {pack.ticketsAvailable > 0 ? (
              <button onClick={() => handleBuyTicket(pack.id)}>
                <Link to={`/buy-tickets/${pack.id}`}>Buy Ticket</Link>
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