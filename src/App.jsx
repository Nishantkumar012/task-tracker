import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'



function App() {
  const [count, setCount] = useState(0)

  return (
    
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Login/>} />
             <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/task-form' element={<TaskForm />} />
              <Route path='/list' element={<TaskList />} />
              <Route path='/item' element={<TaskItem/>}/>
          </Routes>         
       </BrowserRouter>
    
    
    
  )
}

export default App
