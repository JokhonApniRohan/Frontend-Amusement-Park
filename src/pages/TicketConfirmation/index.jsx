import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import './TicketConfirmation.css';
import Header from "../../components/Header";

export const TicketConfirmation = () => {
    const [userName, setUserName] = useState('');
    const [packageName, setPackageName] = useState('');
    const [paidAmount, setPaidAmount] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const {id} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const jsonData = await fetch('http://localhost:4000/buy-package', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userid: document.cookie.split('=')[1],
                packageName: packageName,
                amountPaid: paidAmount,
                transactionId: transactionID
            })
        })

        const data = await jsonData.json()
        console.log(data)
    }

    return (
        <>
        <Header />
        <div className="auth-form-container">
            <h1 className="text-3xl font-medium">Ticket Confirmation</h1>
            <p className="text-xl font-medium">You have chosen Package {id}.</p>

            <form className="ticket-confirmation-form" onSubmit={handleSubmit}> 
                <label htmlFor="packageName">Package Name</label>
                <input value={packageName} onChange={(e) => setPackageName(e.target.value)}type="text" placeholder="package name" />

                <label htmlFor="paidAmount">Paid Amount</label>
                <input value={paidAmount} onChange={(e) => setPaidAmount(e.target.value)}type="text" placeholder="amount"/>

                <label htmlFor="transactionID">Transaction ID</label>
                <input value={transactionID} onChange={(e) => setTransactionID(e.target.value)}type="text" placeholder="Transaction ID"/>

                <button type="submit">Confirm</button>
            
            </form>
        </div>
        </>
    );
}

export default TicketConfirmation;

