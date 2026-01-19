import { createContext, useState, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null;


    // methods
    login: (id: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setuUer] = useState<User | null>(null);

    const handleLogin = (id: number): boolean => {
        console.log(id);
        return true;
    }

    const handleLogout = () => {
        console.log('logout');
    }

    return <UserContext value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
}