import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Login from './pages/login'
import About from './pages/About'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
    </Routes>
      <About/>
    </>
  )
}

export default App
