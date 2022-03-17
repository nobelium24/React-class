import { Link } from "react-router-dom";

const UserNav = ()=>{
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <ul className="nav">
                <li className="nav-item">
                    <Link to={"/user"} className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/user/profile"} className="nav-link">Profile</Link>
                </li>
            </ul>
            <form className="d-flex">
            <Link className="btn btn-outline-danger" to={"/"}>Logout</Link>
            </form>
        </div>
        </nav>
    )
}

export default UserNav;