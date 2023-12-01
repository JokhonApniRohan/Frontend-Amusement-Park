import React, { useState } from "react";
import Header from "../../components/Header";
import "./DeleteUser.css";

export const DeleteUser = () => {
    const [UserID, setUserID] = useState('')

    
    const handleDelete = async (userID) => {
        const data = {
            userID,
            adminToken: localStorage.getItem('admin-token')
          };

        try {
            const response = await fetch(`http://localhost:4000/admin-delete-user/${userID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            } else {
                window.location.href = "/admin-home";
            }

            setUserID('');
        }   catch (error) {
                console.error('Error:', error);
        }

    };

    return (
        <>
        <Header />
        <div className="delete-user-container">
            <h1 className="text-3xl font-medium">Remove a User</h1>

            <form className="delete-user-form" onSubmit={handleDelete}> 

                <label htmlFor="userID">User ID</label>
                <input value={UserID} onChange={(e) => setUserID(e.target.value)} type="text" id="userID" name="userID" />

                <button className="delete-button" type="submit">Remove</button>
            
            </form>
        </div>
        </>
    );

};

export default DeleteUser;