import { Link } from "react-router-dom";

const Navbar = ()=>{


    return (
        <nav  className="navbar bg-light p-4">
            <h1 className="text-danger">
                <Link to={"/"}>Logo</Link>
            </h1>
            <ul className="nav">
              
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