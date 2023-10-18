import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SideHeader from './components/SideHeader/SideHeader'
import "./App.css"

function App() {
  return (
    <>
    <Header/>
    <div className="container">
      
    <SideHeader/>
    </div>
    <Footer/>
    </>
  )
}

export default App