import { Button } from "@/components/ui/button"
import { UserContext } from "@/useContext/context/UserContext"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {
  const { isAuthenticated, logout } = use(UserContext)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Pagina sobre mi</h1>
      <hr />

      <div className="flex flex-col gap-2">

        {/* User profile if logged in */}

        { isAuthenticated && (
          <Link to="/profile" className="hover:text-blue-500 underline text-2xl">Profile</Link>
        )}

        {/* Login Logout */}
        {
          isAuthenticated ? (
            <Button variant="destructive" className="mt-4" onClick={logout}>
              Salir
            </Button>
          ) : (
            <Link to="/login" className="hover:text-blue-500 underline text-2xl">Login</Link>
          )
        }
      </div>
    </div>
  )
}