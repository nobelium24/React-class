import UserLayout from "../layouts/UserLayout";
import { Outlet } from "react-router-dom";

const User = ()=> {
    return (
        <UserLayout>
            <Outlet />
        </UserLayout>
    );
}

export default User;