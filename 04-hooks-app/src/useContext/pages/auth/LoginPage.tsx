import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserContext } from "@/useContext/context/UserContext"
import type React from "react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const {login} = useContext(UserContext)
  const [userId, setUserId] = useState('')

  const navigation = useNavigate()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = login(Number(userId))
    console.log(result);
    
    if (!result) {
      toast.error('User not fount')
      return
    }

    navigation('/profile')
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10" onSubmit={handleLogin}>
        <Input type="number" placeholder="Id user" value={userId} onChange={(e) => setUserId(e.target.value)} />

        <Button type="submit" >Login</Button>
      </form>

      <Link to="/about">
        <Button variant="ghost">Go back</Button>
      </Link>
    </div>
  )
}