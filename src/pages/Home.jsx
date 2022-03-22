import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import DefaultLayout from "../layouts/DefaultLayout";



const Home = ()=> {

   const {user, setUser} = useContext(AuthContext)


   const f = ()=> {
     fetch("https://fakestoreapi.com/products")
     .then(re => re.json)
        .then(data =>{
            console.log(data)
        })
   }

   


    return (
       <DefaultLayout>
            <h1>{user.name}</h1>
            <button onClick={()=> f()}>change User</button>
       </DefaultLayout>
    );
}

export default Home;