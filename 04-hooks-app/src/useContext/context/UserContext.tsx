import { createContext, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

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
        const user = users.find(user => user.id === id);
        if (!user) {
            console.log(`User not found ${id}`);
            setAuthStatus("not-authenticated");
            return false;
        };

        setuUer(user);
        setAuthStatus('authenticated');
        return true;
    }

    const handleLogout = () => {
        setAuthStatus('not-authenticated');
        setuUer(null);
    }

    return <UserContext value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
}