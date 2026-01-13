import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { HooksApp } from './HooksApp'

import './index.css'
// import { FocusScreen } from './useRef/FocusScreen'
import { TasksApp } from './useReducer/TaskApp'
// import { PokemonPage } from './connect-custom-hooks-to-each-other/PokemonPage'
// import { TrafficLightWithEffect } from './useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './useState/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}

    <TasksApp />
  </StrictMode>,
)
