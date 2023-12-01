import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import './TicketConfirmation.css';
import Header from "../../components/Header";

export const TicketConfirmation = () => {
    const [userName, setUserName] = useState('');
    const [packageName, setPackageName] = useState('');
    const [paidAmount, setPaidAmount] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const [error, setError] = useState(null);
    const {pname} = useParams();
    const {Price} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:4000/buy-package', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userid: document.cookie.split('=')[1],
                    packageName: pname,
                    amountPaid: Price,
                    transactionId: transactionID
                }),
            });

            if (response.status === 200) {
                setError(null);
                window.location.href = "/buy-tickets";
            }   else {
                setError('Failed to submit. Please try again.');
            }
        }   catch (error) {
            setError('Failed to submit. Please try again.');
        }

        // const data = await jsonData.json()
        // console.log(data)
    };

    return (
        <>
        <Header />
        <div className="auth-form-container">
            <h1 className="text-3xl font-medium">Ticket Confirmation</h1>

            <form className="ticket-confirmation-form" onSubmit={handleSubmit}> 
                <label htmlFor="packageName">Package Name</label>
                <input value={pname} />

                <label htmlFor="paidAmount">Paid Amount</label>
                <input value={Price} />

                <label htmlFor="transactionID">Transaction ID</label>
                <input value={transactionID} onChange={(e) => setTransactionID(e.target.value)}type="text" placeholder="Transaction ID"/>

                <button type="submit">Confirm</button>
            
            </form>
        </div>
        </>
    );
}

export default TicketConfirmation;

