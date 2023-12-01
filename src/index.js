import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import AppAdmin from "./Admin/App"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyTickets from "./pages/BuyTickets/index.jsx";
import Home from "./pages/Home/index.jsx";
// import SignOut from "./pages/SignOut/index.jsx";
import TicketConfirmation from "./pages/TicketConfirmation/index.jsx";
import UserProfile from "./pages/UserProfile/index.jsx";
import RidesPage from "./Rides/RidesPage.jsx";
import AdminHome from "./Admin/pages/AdminHome/index.jsx";
import AddPackage from "./Admin/pages/AddPackage/index.jsx";
import ViewPackages from "./Admin/pages/ViewPackages/index.jsx";
import EditPackage from "./Admin/pages/EditPackage/index.jsx";
import BalanceSheet from "./Admin/pages/ViewBalanceSheet/index.jsx";
import DeleteUser from "./Admin/pages/DeleteUser/index.jsx";
import { AddRide } from "./Admin/pages/AddRides/index.jsx";
import AddReview from "./pages/SubmitReview/index.jsx";
import DeleteRide from "./Admin/pages/DeleteRide/index.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
              <Route path="/login" element={<App />} />
              <Route path="/admin" element={<AppAdmin />}/>
              <Route path="/admin-home" element={<AdminHome />}/>
              <Route path="/add-package" element={<AddPackage />} />
              <Route path="/view-packages" element={<ViewPackages />} />
              <Route path="/edit-package" element={<EditPackage />} />
              <Route path="/balance-sheet" element={<BalanceSheet />} />
              <Route path="/delete-user" element={<DeleteUser />} />
              <Route path="/" element={<Home />} />
              <Route path="/buy-tickets" element={<BuyTickets />} />
              <Route path="/buy-tickets/:pname/:Price" element={<TicketConfirmation />} />
              <Route path="/user-profile" element={<UserProfile />} />
              {/* <Route path="/sign-out" element={<SignOut />} /> */}
              <Route path="/rides" element={<RidesPage />} />
              <Route path="/add-ride" element={<AddRide />} />
              <Route path="/delete-ride" element={<DeleteRide />} />
              <Route path="/add-review" element={<AddReview />} />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);
