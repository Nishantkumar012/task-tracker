import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Login/>} />
             <Route path='/dashboard' element={<Dashboard/>} />
             
          </Routes>         
       </BrowserRouter>
    
    
    
  )
}

export default App
