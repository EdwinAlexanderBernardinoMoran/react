import { RouterProvider } from "react-router"
import { AppRouter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContext"

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient flex flex-col">
        <RouterProvider router={AppRouter}/>
      </div>
    </UserContextProvider>
  )
}