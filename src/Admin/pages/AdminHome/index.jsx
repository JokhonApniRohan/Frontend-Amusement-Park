import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./AdminHome.css";

const AdminHome = () => {
    return (
        <>
        <Header />
            <div className="admin-home">
                <div className="sections">
                    <h1 className="text-2xl font-medium">Packages</h1>
                    <div className="buttons">
                        <button className="add-button">
                            <Link to="/add-package">Add</Link>
                        </button>

                        <button className="delete-button">Delete</button>
                    </div>
                </div>

                <div className="sections">
                    <h1 className="text-2xl font-medium">Rides</h1>
                    <div className="buttons">
                        <button className="add-button">
                            <Link to="/add-ride">Add</Link>
                        </button>

                        <button className="delete-button">Delete</button>
                    </div>
                </div>

                <div className="sections">
                    <h1 className="text-2xl font-medium">Users</h1>
                    <div className="buttons">
                        <button className="delete-button">Delete</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default AdminHome;