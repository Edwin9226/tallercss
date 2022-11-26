import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "../styles/home.css"

const HomePages = () => {
  return (
    <div>
       <Navbar/>
       <div className='hwel'>
       Welcome to my Playground
       </div>
       
       <div className='p1'>

       Hi Everyone!, my name is Juan Sebastian Sotomayor and this is my playground, 
       check some of my projects. If you like what you see don’t hesitate to contact me,
        I’ll be glad to help you
       </div>
       
        <Footer/>
   

    </div>
  )
}

export default HomePages