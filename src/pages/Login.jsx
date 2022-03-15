import { Link } from "react-router-dom"
const Login = ()=> {
    return (
        <main>
            <Link to={"/"}>Home</Link>

            <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Welcome to Login</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
            <Link to={"/signup"}>Sign up if ou dont have account</Link>
        </main>
    );
}

export default Login;