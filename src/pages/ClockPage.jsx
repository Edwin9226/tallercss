import React from 'react'
import Clock from '../components/Clock'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "../styles/home.css"
const ClockPage = () => {
  return (
    <div>
      <Navbar/>
      <Clock/>
      <Footer/>
    </div>
  )
}

export default ClockPage