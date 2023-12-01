import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ViewBalanceSheet.css';
import Header from '../../components/Header';


const BalanceSheet = () => {
 const [balanceSheet, setbalanceSheet] = useState([]);

 useEffect(() => {
    fetch('http://localhost:4000/fetch-balance', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ adminToken: localStorage.getItem('admin-token')}) })
      .then((response) => response.json())
      .then((data) => { setbalanceSheet(data); console.log(data)})
      .catch((error) => console.error('Error:', error));
  }, []);

 return (
    <>
        <Header />
            <div className='balance-sheet'>
            <h1 className="text-3xl font-medium">Balance Sheet</h1>
            <table className='balance-sheet-list'>
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>Ticket ID</th>
                    <th>Ticket Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {balanceSheet.map((b) => (
                    <tr key={b.UserUserID}>
                        <td>{b.UserUserID}</td>
                        <td>{b.TicketID}</td>
                        <td>{b.Type}</td>
                        <td>{b.Price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

    </>
 );
};

export default BalanceSheet;