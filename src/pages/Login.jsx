import { useContext } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthProvider";
import DefaultLayout from "../layouts/DefaultLayout";


const Login = ()=> {

    const {loggedIn} = useContext(AuthContext)

    return (

        <DefaultLayout>

          <h1>{loggedIn ? "User is in" : "user is out"}</h1>

        </DefaultLayout>
    );
}

export default Login;