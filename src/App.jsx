import React from 'react'
import './App.css'
import NavBar from './componets/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Calc from './componets/Page/Calc/Calc'
import Slide from './componets/Page/Slide/Slide'
function App() {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Calc/>}/>
          <Route path='/Slide' element={<Slide/>}/>
        </Routes>

    </>
  )
}

export default App
