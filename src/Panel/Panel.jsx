import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../component/Login/Login'
import Signup from '../component/Signup/Signup'

const Panel = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default Panel