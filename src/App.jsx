import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import News from './components/News'

function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <Form/>
       
      </div>
    </>
  )
}

export default App
