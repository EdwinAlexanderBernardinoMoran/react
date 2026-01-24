import { Button } from "@/components/ui/button"
import { UserContext } from "@/useContext/context/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router";

export const ProfilePage = () => {

  const {user, logout} = useContext(UserContext);
  const navigation = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigation('/')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile</h1>
      <hr />

      <pre className="my-4">
        {JSON.stringify(user, null, 2)}
      </pre>

      <Button variant="destructive" onClick={handleLogout}>Go out</Button>
    </div>
  )
}