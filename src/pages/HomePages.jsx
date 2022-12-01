import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "../styles/home.css"

const HomePages = () => {
  return (
    <div>
       <Navbar/>
       <div className='home'>
       <h1 className='title'>Welcome to my Playground</h1>
       
       <div className='descripcion'>

Hi Everyone!, my name is Edwin Miguel Pinchao and this is my playground, 
check some of my projects. If you like what you see don’t hesitate to contact me,
 I’ll be glad to help you
</div>
       </div>
       
    
        <Footer/>
   

    </div>
  )
}

export default HomePages