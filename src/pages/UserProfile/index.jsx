import Header from "../../components/Header";

const UserProfile = () => {
    return (
        <>
        <Header />
        User Profile
        </>
    )
}

export default UserProfile;






// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [isAdmin, setAdmin] = useState(false);

//   // Function to toggle admin status
//   const toggleAdmin = () => {
//     setAdmin(!isAdmin);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to {isAdmin ? 'Admin Dashboard' : 'Imagination Amusement Park'}</h1>
//       </header>
//       <main>
//         {isAdmin ? (
//           <section>
//             <h2>Admin Panel</h2>
//             {/* Admin-specific content goes here /}
//             <p>This is the admin homepage. You can manage rides, events, and more.</p>
//           </section>
//         ) : (
//           <>
//             <section>
//               <h2>About Us</h2>
//               <p>
//                 Imagination Amusement Park is a magical place where dreams come to life. With thrilling rides,
//                 enchanting shows, and delicious treats, we guarantee a day filled with joy and wonder for visitors of
//                 all ages.
//               </p>
//             </section>
//             <section>
//               <h2>Rides and Attractions</h2>
//               <ul>
//                 <li>Magical Carousel</li>
//                 <li>Roller Coaster of Dreams</li>
//                 <li>Whirling Teacups</li>
//                 {/ Add more rides as needed /}
//               </ul>
//             </section>
//             <section>
//               <h2>Events and Shows</h2>
//               <p>Check out our calendar for upcoming events and spectacular shows that will leave you in awe.</p>
//             </section>
//           </>
//         )}
//       </main>
//       <footer>
//         <p>&copy; {new Date().getFullYear()} Imagination Amusement Park. All rights reserved.</p>
//       </footer>
//       {/ Button to toggle admin status */}
//       <button onClick={toggleAdmin}>{isAdmin ? 'Switch to User' : 'Switch to Admin'}</button>
//     </div>
//   );
// }

// export default App;