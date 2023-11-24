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
import RidesPage from "./Rides/RidesPage.jsx";
import AdminHome from "./Admin/pages/AdminHome/index.jsx"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
              <Route path="/login" element={<App />} />
              <Route path="/admin" element={<AppAdmin />}/>
              <Route path="/" element={<Home />} />
              <Route path="/buy-tickets" element={<BuyTickets />} />
              <Route path="/buy-tickets/:id" element={<TicketConfirmation />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/sign-out" element={<SignOut />} />
              <Route path="/rides" element={<RidesPage />} />
              <Route path="/admin-home" element={<AdminHome />}/>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);
