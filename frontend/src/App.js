import React from 'react'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Login from './component/Login/Login'
import Signup from './component/Signup/Signup'

const App = () => {
  return (
    <div>
      <Login/>
      <Signup/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App