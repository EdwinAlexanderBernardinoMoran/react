import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;


    // methods
    login: (id: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (id: number): boolean => {
        const user = users.find(user => user.id === id);
        if (!user) {
            console.log(`User not found ${id}`);
            setAuthStatus("not-authenticated");
            return false;
        };

        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', id.toString());
        return true;
    }

    const handleLogout = () => {
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('userId')
    }

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId')

        if (storedUserId) {
            handleLogin(+storedUserId)
        }
    }, [])

    return <UserContext value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === 'authenticated',
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
}