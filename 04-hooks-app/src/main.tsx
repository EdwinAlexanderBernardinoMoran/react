import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'

// import { HooksApp } from './HooksApp'

import './index.css'
// import { InstagromApp } from './useOptimistic/InstagromApp'
// import { ClientInfomation } from './use-suspense/ClientInfomation'
// import { getUserAction } from './use-suspense/api/get-user.action'
// import { MemoCounter } from './memos/MemoCounter'
// import { FocusScreen } from './useRef/FocusScreen'
// import { TasksApp } from './useReducer/TaskApp'
// import { ScrambleWords } from './useReducer/ScrambleWords'
// import { MemoHook } from './memos/MemoHook'
// import { PokemonPage } from './connect-custom-hooks-to-each-other/PokemonPage'
// import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect'
import { ProfessionalApp } from './useContext/ProfessionalApp';
// import { TrafficLight } ftoastrom './useState/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}

    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}

    {/* <MemoCounter/> */}
    {/* <InstagromApp /> */}


    {/* <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-2xl'>Cargando ...</h1>
      </div>
    }>
      <ClientInfomation getUser={getUserAction(1000)}/>
    </Suspense> */}


      <ProfessionalApp />
  </StrictMode>,
)
