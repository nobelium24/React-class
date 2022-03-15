import UserLayout from "../layouts/UserLayout";
import { Outlet } from "react-router-dom";

const User = ()=> {
    return (
        <UserLayout>
            <h1>Welcome to the user login</h1>
            <Outlet />
        </UserLayout>
    );
}

export default User;