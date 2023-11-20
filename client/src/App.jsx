import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Banner } from './components/banner/Banner'
import { LandingPage } from './pages/LandingPage'

function App() {
  const paragraph = "En la Corporación Real Star le apostamosa que, a través del deporte, la recreación yla actividad física cada día más niños,niñas, dolescentes, jóvenes y adultoslogren ser estrellas realmente exitosas,con capacidades para alcanzar y sostenersu propósito de vida y desde su quehaceraporten significativamente al desarrollosocial sostenible de Colombia."
  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
