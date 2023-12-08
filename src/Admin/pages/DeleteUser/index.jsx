import React, { useState } from "react";
import Header from "../../components/Header";
import "./DeleteUser.css";

export const DeleteUser = () => {
    const [UserID, setUserID] = useState('')

    const handleDelete = async (e) => {
        e.preventDefault()

        const jsonData = await fetch('http://localhost:4000/delete-user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: UserID,
                adminToken: localStorage.getItem('admin-token')
            })
        })

        const data = jsonData.json()

        alert(`delete user named "${UserID}"?`)
        setUserID("")

        window.location.href = 'http://localhost:3000/admin-home'
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