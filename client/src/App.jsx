import './App.css'
import { Header } from './components/Header/Header'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' exaxt element={<Header/>}  />
      </Routes>

    </>
  )
}

export default App
