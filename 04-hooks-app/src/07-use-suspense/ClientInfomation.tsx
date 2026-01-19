import { use, type Usable } from "react"
import {type User } from "./api/get-user.action"

interface Props {
    getUser: Usable<User>
}

export const ClientInfomation = ({ getUser }: Props) => {
    // useEffect(() => {
    //     getUserAction(id).then(console.log)
    // }, [id]);

    const user = use(getUser);
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">{ user.name }</h1>

            <p className="text-white text-xl">{ user.location }</p>
            <p className="text-white text-2xl">{ user.rol }</p>
        </div>
    )
}