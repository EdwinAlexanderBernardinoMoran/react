import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"

export const MemoHook = () => {
    const [title, setTitle] = useState('Hola')
    const [subTitle, setSubTitle] = useState('mundo')

    const handleMyApi = useCallback(() => {
        console.log('Llamar a mi API', subTitle);
    }, [subTitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoHook</h1>

            <MyTitle title={title}/>
            <MySubTitle subTitle={subTitle} callMyApi={handleMyApi}/>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => setTitle('Hello ' + new Date().getTime())}>Change title</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => setSubTitle('Hello Two')}>Change subtitle</button>
        </div>
    )
}