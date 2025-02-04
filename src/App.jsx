import { useState } from 'react'
import Header from './Component/header'
import './App.css'
import Footer from './Component/Footer.jsx'
import Body from './Component/body.jsx'

function App() {

  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App

