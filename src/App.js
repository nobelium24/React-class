import "./App.css"
import React, { Route, Routes} from "react-router-dom" 
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import User from "./pages/User";
import Dashboard from "./pages/User/Dashboard";
import Profile from "./pages/User/Profile";
import Blog from "./pages/Blog";


function App(){
  return (
     <main>


         <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="login"  element={<Login/>}/>
            <Route path="blog"  element={<Blog/>}/>

            <Route path="user"  element={<User/>}>
               <Route path=""  element={<Dashboard/>}/>
               <Route path="profile"  element={<Profile/>}/>
               <Route path="*"  element={  <NoMatch /> }/>
            </Route>

            <Route path="*"  element={  <NoMatch /> }/>
        </Routes>
     </main>
  );
}


export default App