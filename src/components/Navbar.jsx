import { Link } from "react-router-dom";

const Navbar = ()=>{


    return (
        <nav  className="navbar bg-light p-4">
            <h1 className="text-danger">Logo</h1>
            <ul className="nav">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/prices"} className="nav-link">Price</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/user"} className="nav-link">User</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/signup/buyer/ghana"} className=" btn btn-success">Buyers Signup</Link>
                    <Link to={"/signup/sellers/nigeria"} className=" btn btn-info">Sellers Signup</Link>
                </li>
            </ul>
        </nav>
    );
}





export default Navbar;