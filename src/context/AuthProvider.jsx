import { createContext, useState } from "react"



const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        name: "Samuel Henshaw",
        email: "samuel@sqi.com",
    });
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [balance, setBalance] = useState(10000);



    
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

 
export {AuthProvider};

export default AuthContext;