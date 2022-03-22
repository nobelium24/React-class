import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Navbar = ()=>{
    const {user} = useContext(AuthContext)

return (
        <nav  className="navbar bg-light p-4">
            <h1 className="text-danger">
                <Link to={"/"}>{user.name} <small>{user.email}</small></Link>
            </h1>
            <ul className="nav">
            <li className="nav-item">
                    <Link to={"/login"} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/blog"} className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/user"} className="nav-link">User</Link>
                </li>
            </ul>
        </nav>
    );
}





export default Navbar;