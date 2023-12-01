import { About } from "../../components/About"
import Header from "../../components/Header"
import React from "react"
import "./Home.css"
import "./Home2.css"

const Home = () => {
    React.useEffect(() => {
        const token = document.cookie.split('=')[1]
        if(!token || token == '0') window.location.href = 'http://localhost:3000/login'
    }, [])
    return (
        <>
        <Header />
        
        <div className="AppUserHome">
      <header className="App-header">

      </header>
      <main>

        <section>

        </section>

      </main>

    </div>
    <h1 id="Homehead">Welcome to Imagination Amusement Park!</h1>

        <About/>
        </>
    )
}



export default Home;