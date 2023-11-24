import imagination from "../images/parkk.jpg"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/admin-home" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={imagination} alt="logo" className="w-40 h-20 object-cover"/>
                    </Link>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <Link to="/admin-profile">Admin Profile</Link>
                    <Link to="/admin-sign-out">Sign Out</Link>
                </div>

            </div>
        </nav>
    )
}

export default Header;