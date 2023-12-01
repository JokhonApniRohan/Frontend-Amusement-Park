import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BuyTickets.css';
import Header from '../../components/Header';

const BuyTickets = () => {
  const [packages, setPackages] = useState([]);
  const [packageName, setPackageName] = useState(0);
  const [Price, setPrice] = useState(0);

  useEffect(() => {
    fetch('http://localhost:4000/get-package')
      .then((response) => response.json())
      .then((data) => { setPackages(data); console.log(data)})
      .catch((error) => console.error('Error:', error));
  }, []);


 const handleBuyTicket = (pname) => {
    setPackageName(pname);
    setPrice(Price);
 };

 return (
  <>
  <Header />
    <div className="buy-tickets">
      <h1 className="text-3xl font-medium">Buy Tickets</h1>
      <div className="packages">
        {packages.map((pack) => (
          <div key={pack.PackageID} className="package">
            <h2 className="text-xl font-medium">{pack.PackageName}</h2>
            <h2>{pack.PackageDetails}</h2>
            <h2>Price: {pack.Price}</h2>
            <h2>tickets available: {pack.AvailableTickets}</h2>
            {pack.AvailableTickets > 0 ? (
              <button onClick={() => handleBuyTicket(pack.PackageID)}>
                <Link to={`/buy-tickets/${pack.PackageName}/${pack.Price}`}>Buy Ticket</Link>
              </button>
              ) : (
              <p className='msg'>Sorry! tickets for this package are currently unavailable</p>
            )}
            
          </div>
        ))}
      </div>
    </div>
    </>
 );
};

export default BuyTickets;