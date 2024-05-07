import { nanoid } from 'nanoid'
import React from 'react'
import { useEffect, useRef } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Create from './Components/Create'


const App = () => {


  
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path='/create' element={<Create/>}/>
  </Routes>
  
    </>
  )
}

export default App