import React from 'react'
import About from './component/About/About'
import Login from './component/Login/Login'
import Signup from './component/Signup/Signup'

const App = () => {
  return (
    <div>
      <Login/>
      <Signup/>
      <About/>
    </div>
  )
}

export default App