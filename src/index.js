import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import AppAdmin from "./Admin/App"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RidesPage from "./Rides/RidesPage.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
              <Route path="/login" element={<App />} />
              <Route path="/admin" element={<AppAdmin />}/>
              <Route path="/rides" element={<RidesPage />} />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);
