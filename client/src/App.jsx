import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exaxt element={<LandingPage/>}  />
      </Routes>

    </>
  )
}
export default App
