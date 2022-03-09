const Navbar = ()=>{

    const showMessage = (value)=>{
        console.log(value)
    }


    return (
        <nav  className="navbar bg-danger p-4">
            <h1 className="text-danger">Logo</h1>
            <button className="btn btn-danger" onClick={()=>showMessage("henshaw")}>Login</button>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: "blue",
        paddding: "20px"
    },
    heading1: {
        fontSize: "40px"
    }
}

export default Navbar;