import React from 'react';
import { About } from "../../components/About";
import Header from "../../components/Header";
import "./AdminHome.css"; // Create a separate CSS file for AdminHome styling

const AdminHome = () => {
  return (
    <>
      <Header />
      <div className="AdminApp"> {/* Update the class name for styling */}
        <header className="App-header">
          {/* Add any admin-specific header content */}
        </header>
        <main>
          <section>
            {/* Add/Delete Package option */}
            <div className="admin-option">
              <h2>Add/Delete Package</h2>
              {/* Add your implementation for Add/Delete Package functionality */}
            </div>

            {/* Add/Delete Rides option */}
            <div className="admin-option">
              <h2>Add/Delete Rides</h2>
              {/* Add your implementation for Add/Delete Rides functionality */}
            </div>

            {/* Add/Remove User option */}
            <div className="admin-option">
              <h2>Add/Remove User</h2>
              {/* Add your implementation for Add/Remove User functionality */}
            </div>
          </section>
        </main>
      </div>
      <h1 id="Homehead">Welcome to Imagination Amusement Park!</h1>
      <About />
    </>
  );
};

export default AdminHome;
