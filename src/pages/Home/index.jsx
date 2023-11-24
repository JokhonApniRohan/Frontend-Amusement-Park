import { redirect } from "react-router-dom";
import { About } from "../../components/About"
import Header from "../../components/Header";
import React from 'react'

const Home = () => {
    React.useEffect(() => {
        const token = document.cookie.split('=')[1]
        if(!token || token == '0') window.location.href = 'http://localhost:3000/login'
    }, [])

    return (
        <>
        <Header />
        <>Home</>
        <About/>
        </>
    )
}

export default Home;



// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to Imagination Amusement Park!</h1>
//       </header>
//       <main>
//         <section>
//           <h2>About Us</h2>
//           <p>
//             Imagination Amusement Park is a magical place where dreams come to life. With thrilling rides, enchanting
//             shows, and delicious treats, we guarantee a day filled with joy and wonder for visitors of all ages.
//           </p>
//         </section>
//         <section>
//           <h2>Rides and Attractions</h2>
//           <ul>
//             <li>Magical Carousel</li>
//             <li>Roller Coaster of Dreams</li>
//             <li>Whirling Teacups</li>
//             {/* Add more rides as needed */}
//           </ul>
//         </section>
//         <section>
//           <h2>Events and Shows</h2>
//           <p>Check out our calendar for upcoming events and spectacular shows that will leave you in awe.</p>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2023 Imagination Amusement Park. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;