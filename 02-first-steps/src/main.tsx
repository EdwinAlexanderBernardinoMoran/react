import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
// import { MyAwosemeApp } from './MyAwosemeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwosemeApp /> */}

  </StrictMode>,
)
