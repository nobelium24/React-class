import "./App.css"
import React, { Route, Routes} from "react-router-dom" 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Prices from "./pages/Prices";
import User from "./pages/User";
import Dashboard from "./pages/User/Dashboard";
import Wallet from "./pages/User/Wallet";
import Exchange from "./pages/User/Exchange";


function App(){
  return (
     <main>


         <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="login"  element={<Login/>}/>
            <Route path="signup/:role/:country"  element={<Signup/>}/>
            <Route path="prices"  element={<Prices/>}/>

            <Route path="user"  element={<User/>}>
               <Route path=""  element={<Dashboard/>}/>
               <Route path="wallet"  element={<Wallet/>}/>
               <Route path="exchange"  element={<Exchange/>}/>
               <Route path="*"  element={  <NoMatch /> }/>
            </Route>

            <Route path="*"  element={  <NoMatch /> }/>
        </Routes>
     </main>
  );
}


export default App