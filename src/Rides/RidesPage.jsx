import { useEffect, useState } from "react";
import Ridebox from "./Rides";
import Header from "../Admin/components/Header";

export default function RidesPage() {
    const [rides, setRides] = useState(false)

    useEffect(() => {
        async function getData() {
            let data = await fetch('http://localhost:4000/Rides')
            data = await data.json()

            console.log(data)
            setRides(data)
        }

        getData()
    }, [])

    return (
        <div id="container">
            <div id="headerRides">
                <h1>Rides</h1>
            </div>

            {rides === false ? "Loading"
             : rides.map((elm, i) => <Ridebox key={i} name={elm.Name} imageSrc={elm.image} description={elm.Description} price={elm.Price}/>)
            }
        </div>
    );
}
