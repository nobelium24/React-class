import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"

const Signup = ()=> {

    const {role, country} = useParams();

    useEffect(()=> {
        console.log(role, country)
    }, [])


    return (
        <main>
            <Link to={"/"}>Home</Link>

            <div className="card text-center">
                <div className="card-header">
                    {country}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Signup as a {role}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
                </div>
            <Link to={"/login"}>Login  if you have account</Link>
        </main>
    );
}

export default Signup;