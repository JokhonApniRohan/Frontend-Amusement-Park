import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import AppAdmin from "./Admin/App"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyTickets from "./pages/BuyTickets/index.jsx";
import Home from "./pages/Home/index.jsx";
import SignOut from "./pages/SignOut/index.jsx";
import TicketConfirmation from "./pages/TicketConfirmation/index.jsx";
import UserProfile from "./pages/UserProfile/index.jsx";
import Header from "./components/Header.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Header/>
            <Routes>
              <Route path="/login" element={<App />} />
              <Route path="/admin" element={<AppAdmin />}/>
              <Route path="/" element={<Home />} />
                <Route path="/buy-tickets" element={<BuyTickets />} />
                <Route path="/buy-tickets/:id" element={<TicketConfirmation />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/sign-out" element={<SignOut />} />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);
