import React, { useState } from "react";
import "./AdminLogin.css"

export const Login = (props) => {
    const [userID, setID] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let data = await fetch('http://localhost:4000/admin-login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                credentials: "include"
            },
            body: JSON.stringify({
                userid: userID,
                password: pass
            })
        })

        data = await data.json()
        console.log(data)
        localStorage.setItem('admin-token', data.token)

        window.location.href = 'http://localhost:3000/admin-home'
    }
    
    return (
        <div className="admin-auth-form-container">
            <h2>Admin Login</h2>
            <form className="admin-login-form" onSubmit={handleSubmit}>
                
                <label htmlFor="userID">userID</label>
                <input value={userID} onChange={(e) => setID(e.target.value)}type="text" placeholder="your userID" id="email" name="email" />
                
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
                <button type="submit">Log In</button>
            
            </form>
        </div>
    )
}
