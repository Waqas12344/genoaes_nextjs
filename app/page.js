import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Offer from './components/Offer'
import GenoaLife from './components/GenoaLife'
import Footer from './components/Footer'
 

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto relative'>
      <Navbar/>
      <Hero/>
      
      <Experience/>
       <Offer/>
       <GenoaLife/>
       <Footer/>
      
    </div>
  )
}

export default Home