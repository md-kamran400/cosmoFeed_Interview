import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './comp/Login'
import HomePage from './comp/HomePage'
import Navbar from './comp/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
