import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FoodCard  from './components/FoodCard'
import FoodCard2 from './components/FoodCard2'
import AboutUs from './components/AboutUs'
import MenuBar  from './components/MenuBar'
import Review from './components/Review'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

// To caLL Component dont use {}

const App = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <FoodCard/>
        <FoodCard2/>
        <AboutUs/>    
        <MenuBar/>
        <Review/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default App
